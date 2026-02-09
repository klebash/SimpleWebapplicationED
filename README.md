# User Management System (Full-Stack)

This project features a **Spring Boot** REST API backend and an **Angular 17+** frontend with a responsive, card-based UI.

---

##  Tech Stack

### Frontend
* **Angular 17** (Standalone Components)
* **Bootstrap 5** (UI Components & Layout)
* **Bootstrap Icons**
* **TypeScript**

### Backend
* **Java 17**
* **Spring Boot 3**
* **Spring Data JPA** (Hibernate)
* **MySQL** (Database)

### Build Tools
* **Maven** (Backend)
* **npm** (Frontend)

---

## Features

* **Home Dashboard:** A centered, professional entry point for the application.
* **Display User List:** Displays users as interactive cards with auto-generated avatars.
* **Real-time Filter:** A dedicated search bar card that filters users by first or last name instantly as you type.
* **Dynamic Registration Form**
* **User Details:** View  user profiles including all registered addresses.

---

---

##  Installation & Setup

### 1. Database Setup
Ensure you have MySQL installed. Open your MySQL terminal or Workbench and run:
```sql
CREATE DATABASE user_db;
```
### 2. Backend Configuration (Spring Boot)
Navigate to the backend folder:
```bash
cd SimpleWebAppBackend
```
Update your MySQL credentials in the application properties file:
src/main/resources/application.properties

Properties
```
spring.datasource.url=jdbc:mysql://localhost:3306/user_db
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```
### 3.Run the Spring Boot application:
```Bash
./mvnw spring-boot:run
```
### 4.Frontend Configuration (Angular)
Navigate to the frontend folder:

```Bash
cd Your-Angular-Project-Folder
```
Install the necessary dependencies:

```Bash
npm install
```

Start the Angular development server:
```Bash
ng serve -o
```
