# Task Manager - 3 Tier Application

3-tier architecture example: Angular (frontend) + Node.js/Express (backend) + MongoDB (database).
Hi app tumhi local var run karun code shikaycha upyog karu shakta, ani nantar DevOps (Docker, CI/CD, Kubernetes) sathi base म्हणून vaparu shakta.

## Structure
```
3-tier-app/
├── backend/          # Node.js + Express REST API
│   ├── config/db.js
│   ├── models/Task.js
│   ├── controllers/taskController.js
│   ├── routes/taskRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/         # Angular app
    └── src/app/...
```

## 1. MongoDB Setup
Local MongoDB install kara (ya MongoDB Atlas cloud account banva):
- Local: https://www.mongodb.com/try/download/community
- Atlas (free cloud): https://www.mongodb.com/cloud/atlas/register

Local MongoDB service start kara:
```bash
mongod
```

## 2. Backend Setup (Node.js + Express)
```bash
cd backend
npm install
cp .env.example .env
# .env madhe MONGO_URI update kara (jar local nasel tar)
npm run dev
```
Backend `http://localhost:5000` var run hoil.
Test: `http://localhost:5000/api/health`

## 3. Frontend Setup (Angular)
```bash
cd frontend
npm install
npm start
```
Frontend `http://localhost:4200` var run hoil.

## API Endpoints
| Method | Endpoint            | Description        |
|--------|---------------------|---------------------|
| GET    | /api/tasks          | Sagle tasks get kara |
| GET    | /api/tasks/:id      | Ek task get kara    |
| POST   | /api/tasks          | Navin task banva    |
| PUT    | /api/tasks/:id      | Task update kara    |
| DELETE | /api/tasks/:id      | Task delete kara    |

## Pudhcha Step (DevOps sathi)
Ha code stable zaल्यावar puढे he add karu shakta:
- Dockerfile (backend + frontend sathi separate)
- docker-compose.yml (backend + frontend + mongo सोबत)
- CI/CD pipeline (GitHub Actions / Jenkins)
- Kubernetes manifests (Deployment, Service, Ingress)
- Nginx reverse proxy config
