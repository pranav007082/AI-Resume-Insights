# AI Resume Insights

An AI-driven resume feedback system built using Langchain and the Gemini API, with a Django backend framework and a Next.js/TypeScript frontend.

The project consists of two main components: the backend (Django) and the frontend (Next.js).

## Backend Setup

### Environment Variables
Create a `.env` file in the backend directory with the following content:

```
DEBUG=1
SECRET_KEY=your_secret_key_here
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=airesumeinsights
SQL_USER=your_database_user
SQL_PASSWORD=your_database_password
SQL_HOST=airesume_db
SQL_PORT=5432
DATABASE=postgres
```

Replace `your_secret_key_here`, `your_database_user`, and `your_database_password` with your credentials.

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
Create a `.env` file in the frontend directory with the following content:

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
