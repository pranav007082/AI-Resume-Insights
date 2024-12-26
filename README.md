# AI Resume Insights

An AI-driven resume feedback system built using Langchain and the Gemini API, with a Django backend framework and a Next.js/TypeScript frontend.

The project consists of two main components: the backend (Django) and the frontend (Next.js).

# Development Setup 

## Backend Setup

### Environment Variables
Create a `.env.dev` file in the backend directory with the following content:

```
DEBUG=1
SECRET_KEY=ai_resume_insights
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=airesumeinsights
SQL_USER=postgresuser
SQL_PASSWORD=postgrespassword
SQL_HOST=airesume_db
SQL_PORT=5432
DATABASE=postgres
GOOGLE_API_KEY=your_google_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Replace `your_google_api_key`, `your_google_client_id` and `your_google_client_secret`  with your credentials.
Ensure these align with the settings in the Docker Compose YAML file.

### Running the Backend

Use Docker to build and run the backend:

```bash
sudo docker compose up --build
```

To stop the application:

```bash
sudo docker-compose down
```

## Frontend Setup

### Environment Variables
Create a `.env.local` file in the frontend directory with the following content:

```
NEXT_PUBLIC_API_HOST=http://localhost:8001
```

### Installing Dependencies
Run the following command in the frontend directory to install dependencies:

```bash
npm install
```

### Running the Frontend
Start the development server:

```bash
npm run dev
```

## JobAnalyzer
# If you want to analyze resume with job description also
After uploading resume if you click job analyzer button and if u want to input job description and get the score,key_skills and missing skills u need to change post method in apiService.tsx as 
post: async function (url: string, data: any): Promise<any> {
        console.log('post', url, data);
    
        const token = await getAccessToken();
        const referer = 'http://127.0.0.1:3000';
    
        return new Promise((resolve, reject) => {
            fetch(${process.env.NEXT_PUBLIC_API_HOST}${url}, {
                method: 'POST',
                body: JSON.stringify(data), // Serialize data to JSON
                headers: {
                    'Authorization': Bearer ${token},
                    'Content-Type': 'application/json', // Ensure content type matches the serialized body
                    'Accept': 'application/json',       // Ensure the server knows the response type
                    'Referer': referer,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response.json().then((err) => {
                            reject({ status: response.status, error: err });
                        });
                    }
                    return response.json();
                })
                .then((json) => {
                    console.log('Response:', json);
                    resolve(json);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    reject(error);
                });
        });
    },

rest everything remains same.

## Additional Notes
- Ensure that Docker and Node.js are installed on your system.
- The backend will be available at `http://localhost:8001` and the frontend at `http://localhost:3000` by default.
- Update environment variables as necessary for your deployment.



---------------------------------------------------------------------------------------------------

# Frontend

npm i 

npm run dev

# Backend

To run : sudo docker compose up --build 

To create new apps : sudo docker-compose exec 
web python manage.py startapp `app-name` 

To abort: sudo docker-compose down 

To allow vscode to edit : sudo chown -R $USER `folder name` 

To create a virtual env : 
python3 -m venv env 
source env/bin/activate

To open shell in container:

sudo docker exec -it backend-web-1  bash

# Tech Stack

Django Rest Framwork \
NextJS \
Typescript \
Postgres \
TailwindCSS \
Docker \
Gemini \
Langchain \
LangGraph \
Zustand \
Material UI \
Headless UI
