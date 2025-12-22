# Full Stack Web Application – CS 465 Portfolio Project

## Overview

This repository contains the final iteration of a full stack web application developed as part of **CS 465: Full Stack Development**. The application supports both a customer-facing website and a secure administrative interface, backed by a Node.js and Express server with a MongoDB database. Over the course of the project, the application evolved from a basic server-rendered site into a fully integrated full stack system with API-driven data access, a single-page administrative interface, and secure authentication.

The purpose of this project was not only to build a working application, but also to demonstrate an understanding of modern full stack architecture, frontend and backend integration, security concepts, testing strategies, and professional documentation practices. This README serves as both technical documentation and a reflective summary of the development process.

---

## Application Architecture

### Frontend Architecture

This project uses two distinct frontend approaches, each selected based on the needs of its users.

The customer-facing side of the application is built using Express-rendered HTML combined with CSS and JavaScript. This approach allows the server to dynamically render pages and deliver content efficiently. It is well suited for scenarios where pages follow a traditional navigation pattern and do not require heavy client-side state management.

The administrative side of the application is implemented as a single-page application (SPA). The SPA architecture allows the admin interface to load once and dynamically update content without full page reloads. This provides a smoother user experience and enables more complex interactions such as live data updates, form validation, and reusable interface components.

---

### Backend Architecture

The backend is built using Node.js and Express, following a RESTful API design. Express handles routing, middleware, and communication between the frontend and the database. Separating the backend into API routes allows both the customer-facing pages and the admin SPA to access shared data logic without duplication.

The backend structure emphasizes scalability and maintainability. Routes are organized by responsibility, and middleware is used for authentication, validation, and error handling.

---

### Database Design

The application uses MongoDB, a NoSQL document-based database. MongoDB was chosen because it supports flexible data models and integrates naturally with JavaScript-based applications. Its document structure aligns well with JSON-based API communication, making it an effective choice for full stack development.

---

## Functionality and Data Flow

### JSON and JavaScript Integration

JavaScript is used throughout the application to implement logic on both the frontend and backend. JSON is used as the data interchange format between the client and server. API requests send JSON payloads to the backend, and responses are returned in JSON format, allowing consistent and predictable data handling.

---

### Refactoring and Code Improvements

Refactoring played a key role in improving the quality of the application. Backend routes were reorganized to reduce duplication and improve clarity. Shared logic was extracted into reusable modules to improve maintainability.

On the frontend, reusable UI components were introduced in the admin SPA. This reduced repeated code, improved consistency across the interface, and made future updates easier to implement.

---

## Security and Authentication

Security was added to protect the administrative side of the application. Authentication middleware ensures that only authorized users can access protected routes. This reinforces proper separation between public and private functionality and reflects real-world security practices.

---

## Testing and API Validation

API endpoints were tested to ensure proper handling of GET, POST, PUT, and DELETE requests. Testing verified correct data retrieval, validation, and persistence.

With authentication in place, testing also ensured that unauthorized users were blocked from protected routes while authorized users could access administrative features.

---

## Professional Reflection

This course significantly advanced my understanding of full stack development. CS 465 required me to design, build, secure, and document a complete application from end to end. I strengthened my skills in JavaScript, Express, MongoDB, RESTful APIs, SPA architecture, authentication, and debugging.

Beyond technical skills, this project emphasized professional practices such as refactoring, documentation, and version control. The completed application now serves as a strong portfolio artifact demonstrating both technical ability and professional readiness.

---

## Repository Information

- Final working version of the full stack application
- Secure administrative authentication implemented
- RESTful API integrated with MongoDB
- Portfolio artifact for CS 465
- Instructor added as GitHub collaborator
