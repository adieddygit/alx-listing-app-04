# 🏠 ALX Listing App

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)
![ESLint](https://img.shields.io/badge/ESLint-configured-4B32C3?style=for-the-badge&logo=eslint)

---

## 📖 Project Description

The **ALX Listing App** is a foundational project designed to scaffold and lay the groundwork for a modern **Airbnb clone**.  
This project focuses on setting up a scalable and well-structured **Next.js** application integrated with **TypeScript**, **TailwindCSS**, and **ESLint**.

The goal is to establish a clean, reusable, and professional codebase that serves as the base for building a responsive, user-friendly **property listing page**.

---

## 🗂️ Project Structure

The project follows a well-organized folder structure to promote scalability and maintainability:

alx-listing-app/
│
├── components/
│ └── common/
│ ├── Card.tsx # Reusable card component for property listings
│ └── Button.tsx # Reusable button component for actions like “Book Now”
│
├── interfaces/
│ └── index.ts # Contains TypeScript interfaces for component props (e.g., CardProps, ButtonProps)
│
├── constants/
│ └── index.ts # Stores reusable constants, such as configuration values or static text
│
├── public/
│ └── assets/ # Contains images, SVGs, and other static assets used in the project
│
├── styles/
│ └── globals.css # TailwindCSS base, components, and utilities
│
└── README.md

yaml
Copy code

### 📁 Folder Purpose Overview

| Folder             | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| **components/**    | Contains reusable UI components like `Card` and `Button`.            |
| **interfaces/**    | Defines TypeScript interfaces for strong typing and maintainability. |
| **constants/**     | Stores constants, configuration data, and reusable strings.          |
| **public/assets/** | Stores all project images, SVGs, and icons for easy access.          |

---

## ⚙️ How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   Install Dependencies
   ```

bash
Copy code
npm install
Run the Development Server

bash
Copy code
npm run dev
View the Application
Open your browser and go to:

arduino
Copy code
http://localhost:3000
You should see the ALX Listing App running successfully, confirming that all configurations are working as expected.

🚀 Summary
This project provides the initial setup for a scalable and maintainable Airbnb clone built with Next.js, TypeScript, and TailwindCSS.
It establishes the foundation for building reusable components, managing assets efficiently, and following best practices in modern web development.

🧠 Tech Stack
⚡ Next.js — React framework for production-grade applications

🔷 TypeScript — Strongly typed JavaScript for cleaner, safer code

🎨 TailwindCSS — Utility-first CSS framework for fast UI development

🧩 ESLint — Ensures consistent code quality and style

💬 Author
👨💻 ALX Student Developer - Emmanuel Adi
📘 Built as part of the ALX Software Engineering (Front-End ProDev Program)
✨ Empowering clean, scalable, and modern web development.
