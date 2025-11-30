
## 🚀 **Employee Attendance System (MERN Stack)**

A full-stack web application where **Employees** can mark attendance and view their dashboard, and **Managers** can view team attendance, summaries, and reports.

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

# 📸 **Screenshots (Add later)**
<img width="1920" height="1020" alt="Screenshot 2025-11-30 173923" src="https://github.com/user-attachments/assets/c97bb3e8-0a11-4b56-95f6-465bb0eb8019" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 173943" src="https://github.com/user-attachments/assets/f4d21309-82e6-4dd0-afb7-f90b5d7e77d3" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 173947" src="https://github.com/user-attachments/assets/915c3a14-840d-4acc-9f68-4596533aa196" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 174055" src="https://github.com/user-attachments/assets/50bc3100-36c8-4e39-9a2b-4992cab25d4f" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 174105" src="https://github.com/user-attachments/assets/6da182e1-4b48-4888-9ad3-3ea8a2d16bf8" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 174154" src="https://github.com/user-attachments/assets/7c9f3f7d-eb03-4499-bd13-64d0eb4072c8" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 174206" src="https://github.com/user-attachments/assets/a7a241c0-22db-4c4b-b08f-932086fad0b3" />
<img width="1920" height="1020" alt="Screenshot 2025-11-30 174214" src="https://github.com/user-attachments/assets/b6776be3-05c7-42f4-8697-cd7250f80425" />

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

