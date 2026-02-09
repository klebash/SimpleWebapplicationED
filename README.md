# 👥 User Management System

Μια πλήρης Full-Stack εφαρμογή για τη διαχείριση χρηστών, χτισμένη με **Spring Boot (Java)** στο Backend και **Angular** στο Frontend.

## 🚀 Χαρακτηριστικά
* **Πλήρες CRUD:** Δημιουργία, Προβολή, και Διαγραφή χρηστών.
* **Δυναμικές Διευθύνσεις:** Προσθήκη πολλαπλών διευθύνσεων (Home/Work) ανά χρήστη.
* **Live Filtering:** Αναζήτηση χρηστών σε πραγματικό χρόνο.
* **Responsive UI:** Μοντέρνος σχεδιασμός με Bootstrap 5.

---

## 🛠️ Προαπαιτούμενα
Πριν ξεκινήσετε, βεβαιωθείτε ότι έχετε εγκαταστήσει:
* **Java 17** ή νεότερη
* **Node.js** (v18+) & **npm**
* **Angular CLI** (`npm install -g @angular/cli`)
* **MySQL Server**

---

## 📂 Οδηγίες Εγκατάστασης & Λειτουργίας

### 1. Backend (Spring Boot)
1.  Πλοηγηθείτε στον φάκελο: `cd SimpleWebAppBackend`
2.  Ρυθμίστε τη σύνδεση της βάσης δεδομένων στο αρχείο `src/main/resources/application.properties` (Database name, username, password).
3.  Τρέξτε την εφαρμογή:
    ```bash
    ./mvnw spring-boot:run
    ```
    *Το API θα τρέχει στο: `http://localhost:8080`*

### 2. Frontend (Angular)
1.  Πλοηγηθείτε στον φάκελο: `cd Your-Angular-Folder-Name`
2.  Εγκαταστήστε τις βιβλιοθήκες:
    ```bash
    npm install
    ```
3.  Εκκινήστε τον server:
    ```bash
    ng serve
    ```
    *Η εφαρμογή θα είναι διαθέσιμη στο: `http://localhost:4200`*

---

## 🗄️ Βάση Δεδομένων
Η εφαρμογή δημιουργεί αυτόματα τους πίνακες (Hibernate ddl-auto). Θα χρειαστεί απλώς να δημιουργήσετε μια κενή βάση δεδομένων στη MySQL με το όνομα που ορίσατε στο `application.properties`.

---

## 📸 Screenshots
*(Εδώ μπορείς αργότερα να προσθέσεις screenshots από τη δική σου εφαρμογή)*
