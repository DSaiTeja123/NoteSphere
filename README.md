# NoteSphere

A secure and responsive full-stack note-taking application built with the **MERN Stack** and styled using **Tailwind CSS**.  
**Authenticated users** can create, update, pin, and delete notes, with all data securely stored in MongoDB.

---

## ✨ Features

- **User Authentication** (Register, Login)
- **Create, Update, and Delete Notes**
- **Add Title, Content, and Tags** to each note
- **Pin and Unpin Notes**
- **Responsive UI** across devices
- **Secure API** with JWT-based authentication
- **Elegant Date Formatting** using `moment.js`
- **Clean Modal UI** for editing and note interaction

---

## 🚀 Demo

**Live:** [https://notes-app-saiteja.vercel.app](https://notes-app-saiteja.vercel.app)

---

## 📦 Installation

1. **Clone the repository**
- git clone https://github.com/DSaiTeja123/NoteSphere
- cd notesphere

2. **Install dependencies**

**Install client dependencies**
```bash
cd client
npm install
```

**Install server dependencies**
```bash
cd server
npm install
```

3. **Start the development server**

**Terminal 1 - start backend**
```bash
cd server
npm start
```

**Terminal 2 - start frontend**
```bash
cd client
npm run dev
```

4. **Open in your browser:**  
[http://localhost:5173](http://localhost:5173)

---

## 🛠️ Usage

- **Register/Login** to access your personal Notes Dashboard.
- **Create notes** with a title, content, and optional tags.
- **Pin important notes** to the top of your view for quick access.
- **Edit or Delete notes** easily using modals.
- **All notes are securely saved** in MongoDB and associated with the logged-in user.
- **Responsive layout** ensures seamless usage across mobile, tablet, and desktop.
- **Timestamps** are shown using formatted dates via `moment.js`.

---

## 🌐 Deployment

**Client (Frontend) on Vercel:**  
- Push the `client` folder to GitHub and import into Vercel.  
- Configure `vite.config.js` if needed for production routing.
- Run the client app using the environment variable:
  - `VITE_BASE_URL` (e.g., `https://your-backend-api.com`)

**Server (Backend) on Render:**  
- Push the `server` folder to GitHub and import into Render.
- Set the following environment variables:
  - `PORT`
  - `VITE_BASE_URL`
  - `MONGODB_URI`
  - `ACCESS_TOKEN_SECRET`

---

## 🧩 Tech Stack

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Moment.js](https://momentjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Modal](https://reactcommunity.org/react-modal/)
- [React Router DOM](https://reactrouter.com/en/main)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon)
