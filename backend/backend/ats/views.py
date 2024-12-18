from django.shortcuts import render, redirect
from .forms import ResumeUploadForm
import PyPDF2
from django.http import HttpResponse
from copy import deepcopy
from typing import Dict, TypedDict, Optional
from langgraph.graph import StateGraph, END
import random
import time
import PyPDF2
import google.generativeai as genai
from langchain_google_genai import ChatGoogleGenerativeAI
import time
import os
import json
from dotenv import load_dotenv
load_dotenv()

GOOGLE_API_KEY=os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
model=ChatGoogleGenerativeAI(model='gemini-pro',google_api_key=GOOGLE_API_KEY)



def llm(x):
    return model.invoke(x).content


class GraphState(TypedDict):
    subagent_feedback: Optional[list]=[]
    agent_feedback: Optional[list]=[]
    history: Optional[dict]={}
    resume: Optional[str]=None
    final_verdict: Optional[str]=None
    all_pairs: Optional[str]=None
    subagent: Optional[str]=None
    agent: Optional[str]=None



def handle_clean(state):
    "Function to clean the resume"
    resume= state.get('resume')
    print("Cleaning loaded text...")
    resume = llm(prompt_clean.format(resume))
    return {'resume':resume}



def handle_subagent(state):
    "Function to handle the subagents"
    time.sleep(5)
    history=state.get('history')
    subagent_feedback= state.get('subagent_feedback')
    resume=state.get('resume')
    all_pairs=state.get('all_pairs')
    
    agent = list(all_pairs.keys())[0]
    subagent=all_pairs[agent][0]
    
    current_feedback = llm(prompt_subagent.format(subagent,subagent_desc[agent][subagent],resume))
    subagent_feedback.extend(["{} : {}".format(subagent,current_feedback)])
    history[agent][subagent]=current_feedback
    all_pairs[agent].remove(subagent)
    return {'subagent_feedback':subagent_feedback,'history':history,'all_pairs':all_pairs,'agent':agent}



def handle_agent(state):
    "Function to handle the agents"
    time.sleep(5)
    feedback=state.get('subagent_feedback')
    agent_feedback=state.get('agent_feedback')
    all_pairs=state.get('all_pairs')
    history=state.get('history')
    
    agent=list(all_pairs.keys())[0]
    
    print("Reveiwing {} ... ".format(agent))
    
    summary = llm(prompt_agent.format(agent,agent_desc[agent],feedback))
    agent_feedback.extend(["{} : {}".format(agent,summary)])
    history[agent]['Overall']=summary
    
    del all_pairs[agent]
    
    try:
        agent=list(all_pairs.keys())[0]
    except:
        pass
    return {'agent_feedback':agent_feedback,'history':history,'all_pairs':all_pairs,'agent':agent}



def handle_superagent(state):
    "Function to handle the superagent"
    time.sleep(5)
    print("Final verdict getting updated...")
    history= state.get('history')
    feedback=state.get('agent_feedback')
    result=llm(prompt_superagent.format(feedback))
    history.update({"Final Verdict":result})
    return {'final_verdict':result,'history':history}
    


####################################################################################################################################################################################################
#Prompts

prompt_clean = "Clean the following resume by removing special characters and unnecessary text. Resume: {}"
# Descriptions for Subagents
subagent_desc = {
    "Impact": {
        "Quantify impact": "Use specific numbers, percentages, or metrics to clearly demonstrate the scale and significance of achievements.",
        "Repetition": "Maintain consistent language but avoid repeating phrases or descriptions across multiple sections.",
        "Weak verbs": "Use strong, action-oriented verbs to effectively highlight contributions and responsibilities.",
        "Verb tenses": "Ensure consistent use of present tense for current roles and past tense for previous roles.",
        "Responsibilities": "Highlight key tasks relevant to the job applied for, avoiding generic job descriptions.",
        "Spelling & consistency": "Ensure there are no spelling errors and formatting, capitalization, and punctuation remain consistent throughout."
    },
    
    "Brevity": {
        "Length": "Keep the resume concise—typically one page for entry-level positions or two for extensive experience.",
        "Bullet Lengths": "Ensure bullet points are concise (1-2 lines), focusing on key achievements and contributions.",
        "Filler Words": "Minimize filler words to maintain brevity and maximize the impact of each statement."
    },
    
    "Style": {
        "Buzzwords": "Incorporate relevant industry-specific keywords and terms that align with the job description.",
        "Dates": "Ensure employment dates follow a consistent format (e.g., MM/YYYY) and account for any unexplained gaps.",
        "Contact and Personal Details": "Clearly display name, contact information, and other essential personal details.",
        "Readability": "Use a simple, clean layout and font that is easy for ATS systems to parse. Avoid complex formatting or tables.",
        "Personal Pronouns": "Minimize the use of personal pronouns (e.g., 'I', 'me', 'my') to keep focus on achievements.",
        "Active Voice": "Use active voice to describe responsibilities and accomplishments, making the resume more impactful.",
        "Consistency": "Ensure formatting, language, and style are consistent throughout for a professional presentation."
    },
    
    "Sections": {
        "Summary": "Provide a concise overview of qualifications, experience, and career goals.",
        "Education": "Include academic background, such as degrees, institutions, and relevant coursework or achievements.",
        "Unnecessary Sections": "Omit irrelevant sections, such as hobbies or interests, unless they add specific value.",
        "Skills": "List technical, soft, and transferable skills relevant to the job to demonstrate your capabilities."
    }
}

# Descriptions for Agents
agent_desc = {
    "Impact": "Ensure the resume highlights achievements, contributions, and the value brought to employers.",
    "Brevity": "Keep the resume focused and easy to scan, ideally one page for entry-level and two pages for extensive experience.",
    "Style": "Ensure the layout, formatting, and visual appeal are clean, consistent, and professional.",
    "Sections": "Verify that key resume sections (Summary, Education, Work Experience, Skills) are included and relevant."
}

# Prompt for Subagent
prompt_subagent = ("As a Resume Expert, you are tasked with analyzing this resume for {} in the area of {}. "
                   "Provide a score out of 10 and suggest improvements in 1-2 lines. Output both the score and feedback.")

# Prompt for Agent
prompt_agent = ("You are a Resume Expert analyzing the resume for {} regarding {}. Summarize the sub-agent feedback and "
                "provide a score out of 10, along with improvement suggestions in 1-2 lines. No bullet points or headings. "
                "Feedback report: {}")

# Prompt for Superagent
prompt_superagent = ("You are a Resume Expert tasked with giving a final score based on the feedback provided. "
                     "Rate the resume on a scale of 10 using the following analogy: "
                     "Score 3 or less: Trash, Score 5 or less: Needs major improvements, Score 6-7: Average, Score 8-9: Excellent, "
                     "Score 10: Exceptional. Provide the score and a brief paragraph with your reasoning. Feedback: {}")

#####################################################################################################################################################################################


agent_subagent_pairs={}
for main_key, nested_dict in subagent_desc.items():  
    pairs = {main_key: list(nested_dict.keys())}
    agent_subagent_pairs.update(pairs)

history=deepcopy(subagent_desc)

for key,value in history.items():
    if isinstance(value,dict):
        value['Overall']=""
        for nested_key,nested_value in value.items():
            value[nested_key]=""


workflow= StateGraph(GraphState)
workflow.add_node("handle_clean",handle_clean)
workflow.add_node("handle_subagent",handle_subagent)
workflow.add_node('handle_agent',handle_agent)
workflow.add_node('handle_superagent',handle_superagent)

def subagent_check(state):
    agent=state.get('agent')
    all_pairs=state.get('all_pairs')
    if len(all_pairs[agent]):
        return "handle_subagent"
    else:
        return "handle_agent"

def agent_check(state):
    all_pairs = state.get('all_pairs')
    if len(all_pairs.keys()):
        return "handle_subagent"
    else:  
        return "handle_superagent"

workflow.add_conditional_edges(
    "handle_subagent",
    subagent_check,
    {
        "handle_subagent":"handle_subagent",
        "handle_agent":"handle_agent"
    }
)

workflow.add_conditional_edges(
    "handle_agent",
    agent_check,
    {
        "handle_subagent":"handle_subagent",
        "handle_superagent":"handle_superagent"
    }
)

workflow.set_entry_point("handle_clean")
workflow.add_edge('handle_clean','handle_subagent')
workflow.add_edge('handle_superagent',END)

app = workflow.compile()


def save_conversation(conversation, filename='conversation.json'):
    with open(filename, 'w') as f:
        json.dump(conversation, f, indent=4)

def load_conversation(filename='conversation.json'):
    with open(filename, 'r') as f:
        conversation = json.load(f)
    return conversation


# Views
def home(request):
    return render(request, 'ats/home.html')

def resumeReview(request):
    if request.method == 'POST':
        form = ResumeUploadForm(request.POST, request.FILES)
        if form.is_valid():
            # Save the resume to the database
            resume_instance = form.save()

            # Extract text from the uploaded PDF resume
            resume_file = request.FILES['resume']
            lines = []
            pdf_reader = PyPDF2.PdfReader(resume_file)
            num_pages = len(pdf_reader.pages)
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                page_text = page.extract_text()
                lines.extend(page_text.split('\n'))
            
            # Join lines to pass into the context
            lines = '\n'.join(lines)


            agent = list(agent_subagent_pairs.keys())[0]
            subagent = agent_subagent_pairs[agent][0]
            # conversation = app.invoke({
            #     'subagent_feedback': [],
            #     'agent_feedback': [],
            #     'history': history,
            #     'resume': lines,
            #     'all_pairs': deepcopy(agent_subagent_pairs),
            #     'agent': agent,
            #     'subagent': subagent
            # }, {'recursion_limit': 100})

            # save_conversation(conversation)
            conversation=load_conversation()

            # Render the results
            context = {'lines': lines,'conversation':conversation}
            return render(request, 'ats/resumeReview.html', context)
    else:
        form = ResumeUploadForm()

    return render(request, 'ats/resumeUpload.html', {'form': form})
