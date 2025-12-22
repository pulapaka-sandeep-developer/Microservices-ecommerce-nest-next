# Microservices-ecommerce-nest-next
Designing and Implementation of a Microservice-based Application.

##🛒 Microservices E-Commerce Application (NestJS + Next.js)
#📌 Assignment Overview

This project demonstrates the design and implementation of a Microservice-based application using NestJS for the backend and Next.js (TypeScript) for the frontend.

The application includes:

Two backend microservices:

Product Service

Order Service

A client-side application:

Dynamic Signup Form rendered based on JSON configuration

The solution focuses on clean architecture, scalability, maintainability, and performance.

##🧱 Tech Stack
#Backend

NestJS

MongoDB (Mongoose)

REST APIs

Axios / HttpModule

Class Validator

ConfigModule (.env)

#Frontend

Next.js (App Router)

TypeScript

React Hook Form

Material UI (MUI)

Local Storage for persistence

##📂 Repository Structure (Single Repo)
microservices-ecommerce-nest-next/
│
├── backend/
│   ├── product-service/
│   │   ├── src/
│   │   │   ├── product/
│   │   │   │   ├── dto/
│   │   │   │   ├── product.controller.ts
│   │   │   │   ├── product.service.ts
│   │   │   │   ├── product.schema.ts
│   │   │   │   └── product.module.ts
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── .env
│   │   └── package.json
│   │
│   └── order-service/
│       ├── src/
│       │   ├── order/
│       │   │   ├── dto/
│       │   │   ├── order.controller.ts
│       │   │   ├── order.service.ts
│       │   │   ├── order.schema.ts
│       │   │   └── order.module.ts
│       │   ├── app.module.ts
│       │   └── main.ts
│       ├── .env
│       └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   └── DynamicForm.tsx
│   │   ├── config/
│   │   │   └── formConfig.ts
│   │   ├── types/
│   │   │   └── form.ts
│   │   └── utils/
│   │       └── storage.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md

##🔧 Backend Details
#1️⃣ Product Service

Manages product data

#CRUD operations:

Create Product

Get All Products

Get Product by ID

Update Product

Delete Product

#Base URL

http://localhost:3001/api/products

#2️⃣ Order Service

Manages orders

Communicates with Product Service via REST

Automatically calculates order total

#Base URL

http://localhost:3002/api/orders

🔗 Inter-Service Communication

Order Service fetches product details from Product Service

Orders include embedded product information in GET APIs

#Example:

Create Product → Create Order using Product ID

GET Orders → returns Order + Product details

#🗄️ Database Configuration
MongoDB

Database: products

Database: orders

Example .env:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/products

#🖥️ Frontend Details (Next.js)
🎯 Features

Signup form generated dynamically from JSON

Supports:

TEXT

LIST (Dropdown)

RADIO

Field behavior controlled entirely by JSON

Fully responsive using Material UI

Data persistence using localStorage

🧩 Dynamic JSON Configuration
{
  "name": "Gender",
  "fieldType": "RADIO",
  "required": true,
  "options": ["Male", "Female", "Others"]
}


Changing fieldType automatically changes UI without code changes.

▶️ How to Run Locally
#1️⃣ Backend – Product Service
cd backend/product-service
npm install
npm run start:dev


#Runs on:

http://localhost:3001

#2️⃣ Backend – Order Service
cd backend/order-service
npm install
npm run start:dev


Runs on:

http://localhost:3002

#3️⃣ Frontend
cd frontend
npm install
npm run dev


Runs on:

http://localhost:3000

#✅ Assignment Requirements Coverage

✔ Microservice Architecture
✔ Two independent NestJS services
✔ REST communication
✔ MongoDB schema design
✔ CRUD operations
✔ Dynamic UI rendering via JSON
✔ Validation using React Hook Form
✔ Responsive design with MUI
✔ Local storage persistence
✔ Clean & modular code

#🧪 Example Workflow

Create Product (Product Service)

Create Order using Product ID (Order Service)

Fetch Orders → includes Product details

Fill Signup Form → dynamic fields from JSON

📌 Notes

The project follows best coding practices

Suitable for production-grade scalability

Built with maintainability and clarity in mind

#👨‍💻 Author

Sandeep P
Full Stack Developer
(NestJS • Node.js • React • Next.js • MongoDB)
