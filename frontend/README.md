# 📺 Custom YouTube Clone – MERN Stack Application

A personalized, feature-rich video streaming platform inspired by YouTube. Built using the **MERN stack** (MongoDB, Express, React, Node.js) and integrated with **Cloudinary** for secure media uploads.

---

## 🚀 Project Overview

This clone simulates core YouTube functionalities like user authentication, video uploading, channel creation, and engagement features (likes, comments, views, etc.). Fully responsive and optimized for modern devices.

### 🎯 Core Highlights

* 🔒 Secure user registration & login with JWT
* 📹 Video upload + thumbnail support via Cloudinary
* 🧑‍💼 Channel creation & subscription system
* 💬 Comment, like, dislike & view tracking
* 🔍 Search and filter for videos
* 📱 Responsive layout (mobile-friendly)
* 🎛 Personal dashboard for managing uploads

---

## 🧰 Tech Stack

* **Frontend:** React + Vite, Redux Toolkit, TailwindCSS
* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Media Storage:** Cloudinary
* **Authentication:** JWT + bcrypt
* **File Uploads:** multer + streamifier

---

## ⚙️ Setup Instructions

### 📁 Clone the Repository

```bash
git clone <your-forked-repo-url>
cd youtube-clone-custom
```

### 📌 Environment Configuration

Create a `.env` file in the `backend` directory:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
npm run start  # Starts server on http://localhost:5000
```

## 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev     # Starts Vite server on http://localhost:5173
```

---

## 🧪 API Endpoints Summary

### 🔐 Auth - `/api/auth`

* `POST /register` – Sign up with profile image
* `POST /login` – User login
* `GET /me` – Current user info

### 📹 Videos - `/api/videos`

* `GET /` – All videos
* `GET /search` – Search by title
* `GET /user` – Current user's videos
* `POST /upload` – Upload new video (auth)
* `PUT /:id` – Edit video (auth)
* `DELETE /:id` – Delete video (auth)
* `POST /:id/like` – Like/unlike
* `POST /:id/dislike` – Dislike/remove
* `PATCH /:id/views` – Increment view count

### 💬 Comments - `/api/videos/:videoId/comments`

* `POST /` – Add comment (auth)
* `GET /` – List comments
* `PUT /:commentId` – Edit (auth)
* `DELETE /:commentId` – Remove (auth)

### 📺 Channels - `/api/channels`

* `POST /` – Create channel with banner
* `GET /:id` – Get channel details
* `PUT /:id` – Edit channel info
* `DELETE /:id` – Delete channel
* `POST /:id/subscribe` – Toggle subscription

---

## 🔍 Useful Scripts

### Backend

* `npm run start` – Starts dev server with nodemon

### Frontend

* `npm run dev` – Runs frontend (Vite)
* `npm run build` – Builds for production

---

## 🧱 Dependencies Snapshot

### Backend

`express`, `mongoose`, `jsonwebtoken`, `bcrypt`, `cloudinary`, `multer`, `streamifier`, `dotenv`, `cors`, `nanoid`, `express-async-handler`

### Frontend

`react`, `redux-toolkit`, `axios`, `react-router-dom`, `tailwindcss`, `vite`, `react-icons`, `react-hot-toast`

---

## 👨‍💻 Developed By

**Devansh Sen**
Custom YouTube clone enthusiast | Full Stack Developer
GitHub: \[Your GitHub Profile]
LinkedIn: \[Your LinkedIn Profile]

---

Feel free to fork, star ⭐, and improve this project!



this is link og the video google drive<!-- https://drive.google.com/file/d/1646gxyea058IOCppIyxLePK6qtlmDXYJ/view?usp=sharing -->

github link -> https://github.com/Devansh2808/youtube-clone-custom
