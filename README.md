# 🔌 University E-Voting API

**Team Group 3 - Advent 2025**

This repository contains the backend API for the **Secure Auditable E-Voting System**. It handles user authentication, candidate management, vote processing, and audit logging. Built with Node.js, Express, and Prisma, it provides a robust and secure foundation for the mobile and web clients.

---

## 🚀 Key Features

*   **Authentication:** JWT-based auth with Role-Based Access Control (RBAC) for Admin, Officer, Candidate, and Voter.
*   **Voter Verification:** OTP generation and validation via Email/SMS.
*   **Vote Management:** Secure, transactional vote casting with single-use ballot tokens.
*   **Candidate Management:** Nomination submission, file uploads (manifestos/photos), and approval workflows.
*   **Audit Logging:** Immutable logs for all critical system actions.
*   **Reporting:** Real-time aggregation of election results and turnout statistics.

---

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MySQL
*   **ORM:** Prisma
*   **Authentication:** JSON Web Tokens (JWT), Bcrypt
*   **File Storage:** Multer (Local storage for Milestone 1)
*   **Email Service:** Nodemailer

---

## 🏁 Getting Started

### Prerequisites
*   Node.js (v18+)
*   MySQL Server

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JDanielZ5G/Evoting-system-API.git
    cd Evoting-system-API
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    *   Copy `.env.example` to `.env` (if not present, create one).
    *   Set `DATABASE_URL`, `JWT_SECRET`, and email credentials.

4.  **Database Setup:**
    ```bash
    npx prisma migrate dev --name init
    npx prisma db seed # (Optional: Seed dummy data)
    ```

5.  **Start the Server:**
    ```bash
    npm run dev
    ```

---

## 📡 API Endpoints (Overview)

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/login` | Login user | Public |
| **POST** | `/api/verification/send-otp` | Request OTP | Voter |
| **GET** | `/api/candidates` | List candidates | Public |
| **POST** | `/api/votes/cast` | Cast a vote | Voter (with Token) |
| **GET** | `/api/reports/results` | Get election results | Public |

---

## 🤝 Contribution Guidelines

1.  **Branching:** Create a feature branch (e.g., `feature/candidate-api`).
2.  **Commits:** Use semantic commit messages (e.g., `feat: implement vote controller`).
3.  **Pull Requests:** Submit a PR to `main` for review.

---

## 👥 Team Members (Group 3)

*   **Daniel** (Team Lead)
*   **Mable**
*   **Ken**
*   **Christine**
*   **Esther**
*   **Trevor**
