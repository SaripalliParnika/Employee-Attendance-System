
## 🚀 **Employee Attendance System (MERN Stack)**

A full-stack web application where **Employees** can mark attendance and view their dashboard, and **Managers** can view team attendance, summaries, and reports.

---
## ▶️ **Video Link**

https://drive.google.com/file/d/1kryhypK5yMBcq0d4XuNWu-ax8IJsI1BA/view?usp=drive_link

---

# 📂 **Project Features**

### 👨‍💼 **Employee**

* Register / Login
* Mark Check-In & Check-Out
* View Today’s Status
* View Weekly Attendance
* Personal Dashboard (present/absent/late/total hours)

### 👨‍💻 **Manager**

* Login
* View All Employees
* View All Attendance
* Summary Dashboard
* Team Calendar (optional)
* Export Attendance Data

---

# 📁 **Project Structure**

```
employee-attendance-system/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    └── package.json
```

---

# ⚙️ **1. Setup Instructions**

Follow these steps exactly:

---

## 🛠 **Step 1 — Clone the Project**

```bash
git clone <your-github-repository-url>
cd employee-attendance-system
```

---

## 🛠 **Step 2 — Install Dependencies**

### Backend:

```bash
cd backend
npm install
```

### Frontend:

```bash
cd ../frontend
npm install
```

---

## 🛠 **Step 3 — Create Environment Variables**

Inside the **backend** folder, create `.env`:

```
PORT=5000
MONGO_URI=your-mongodb-cluster-url
JWT_SECRET=supersecretkey
```

✔️ **Make sure MongoDB Cluster IP is whitelisted:**
`0.0.0.0/0` (Allow access from anywhere)

✔️ Replace `your-mongodb-cluster-url` with this format:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/attendance?retryWrites=true&w=majority
```

---

## 🛠 **Step 4 — Start Backend Server**

```bash
cd backend
node server.js
```

If successful:

```
Server running on port 5000
MongoDB Connected
```

---

## 🛠 **Step 5 — Start Frontend**

```bash
cd frontend
npm start
```

Frontend runs at:
👉 **[http://localhost:3000/](http://localhost:3000/)**
Backend runs at:
👉 **[http://localhost:5000/](http://localhost:5000/)**

---

# 🔑 **Environment Variables**

| Variable     | Description                     |
| ------------ | ------------------------------- |
| `PORT`       | Backend API port                |
| `MONGO_URI`  | MongoDB Atlas connection string |
| `JWT_SECRET` | Token secret key                |

---

# 🧪 **API Endpoints**

### **AUTH**

| Method | Endpoint             | Role               |
| ------ | -------------------- | ------------------ |
| POST   | `/api/auth/register` | Employee / Manager |
| POST   | `/api/auth/login`    | Both               |
| GET    | `/api/auth/me`       | Logged-in User     |

### **ATTENDANCE**

| Method | Endpoint                   | Role     |
| ------ | -------------------------- | -------- |
| POST   | `/api/attendance/checkin`  | Employee |
| POST   | `/api/attendance/checkout` | Employee |
| GET    | `/api/attendance/today`    | Employee |

### **MANAGER**

| Method | Endpoint                      | Role    |
| ------ | ----------------------------- | ------- |
| GET    | `/api/manager/attendance`     | Manager |
| GET    | `/api/manager/attendance/:id` | Manager |
| GET    | `/api/manager/summary`        | Manager |
| GET    | `/api/manager/today`          | Manager |
| GET    | `/api/manager/export`         | Manager |

### **DASHBOARD**

| Method | Endpoint                  | Role     |
| ------ | ------------------------- | -------- |
| GET    | `/api/dashboard/employee` | Employee |
| GET    | `/api/dashboard/manager`  | Manager  |

---

# 📸 **Screenshots **
<img width="1919" height="1020" alt="Screenshot 2025-11-30 191043" src="https://github.com/user-attachments/assets/cd9f4d5b-0cb3-4709-90b7-112975442b00" />
<img width="1911" height="1013" alt="Screenshot 2025-11-30 191113" src="https://github.com/user-attachments/assets/e538d88c-c951-48a1-9403-409c6d2cddb6" />
<img width="1919" height="1021" alt="Screenshot 2025-11-30 191126" src="https://github.com/user-attachments/assets/234ae106-46e7-4a3b-8464-0d5f871058b1" />
<img width="1919" height="1018" alt="Screenshot 2025-11-30 190916" src="https://github.com/user-attachments/assets/a38212de-f43b-4b1e-b318-67555823646d" />
<img width="1916" height="1022" alt="Screenshot 2025-11-30 191210" src="https://github.com/user-attachments/assets/40f44c33-e169-4897-bc05-faf5d75867d8" />
<img width="1915" height="1014" alt="Screenshot 2025-11-30 191220" src="https://github.com/user-attachments/assets/4846714b-253b-4266-b340-3b6dff72c279" />
<img width="1907" height="1015" alt="Screenshot 2025-11-30 191246" src="https://github.com/user-attachments/assets/cede229e-e461-4865-9c03-065dbdff70d1" />

---

# 🧑‍💻 **Technologies Used**

### **Frontend**

* React.js
* Axios
* CSS / HTML

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

---

