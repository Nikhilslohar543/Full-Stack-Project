#Full Stack Project 

# Expense Tracker

## Overview

The Expense Tracker is a full-stack application built with Java Spring Boot for the backend and Angular for the frontend. This application allows users to track their daily expenses by providing functionalities to add, update, and delete expense records. Users must first register and then log in to access their profiles.

## Features

- User Registration: New users can create an account.
- User Authentication: Secure login for registered users.
- Expense Management:
  - Add new expenses.
  - Update existing expenses.
  - Delete expenses.
- View Expense History: Users can view their tracked expenses.

## Technologies Used

- **Backend:**
  - Java
  - Spring Boot
  - Hibernate
  - JPA Repository
  - MySQL Database

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Angular

## Installation

### Prerequisites

- JDK 11 or higher
- MySQL Database
- Angular 16 and npm

### Clone the Repository

```bash
git clone https://github.com/Nikhilslohar543/Full-Stack-Project.git
cd Full-Stack-Project
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd BackEnd
Update the application.properties file with your MySQL database credentials:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
Build the Spring Boot application:

bash
Copy code
./mvnw clean install
Run the Spring Boot application:

bash
Copy code
./mvnw spring-boot:run
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd FrontEnd
Install the required dependencies:

bash
Copy code
npm install
Start the Angular application:

bash
Copy code
ng serve
Open your browser and go to http://localhost:4200.

Usage
Register: Navigate to the registration page and create a new account.
Log In: After registering, log in to your account.
Manage Expenses: Once logged in, you can add, update, and delete your expenses.

Acknowledgments
Inspiration from various expense tracking applications.
Thanks to the community for their open-source libraries and frameworks.
