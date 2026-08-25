<<<<<<< HEAD
# 🎥 Connectify – Seamless Video Calling Application

A real-time video communication platform built with **React.js**, **Vite**, **WebRTC**, and **ZegoCloud SDK**. Create instant meeting rooms, share invite links, and connect with crystal-clear HD video and audio — no account required.

![Connectify Banner](https://via.placeholder.com/900x400/080910/1a8df5?text=Connectify+–+Seamless+Video+Calling)

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Instant Room Generation** | Create a unique meeting room in one click |
| 🔗 **Peer-to-Peer Connectivity** | WebRTC-powered direct connections for lowest latency |
| 🎥 **HD Video Streaming** | Crystal-clear video with adaptive quality |
| 🎙️ **Real-Time Audio** | Noise suppression & echo cancellation |
| 🔒 **Secure Connections** | End-to-end encrypted via DTLS/SRTP |
| 📱 **Cross-Platform** | Works in any modern browser, no download needed |
| 🔗 **Shareable Invite Links** | One-click copy of room ID and invite URL |
| 📺 **Screen Sharing** | Share your screen with all participants |

---

## 🛠 Tech Stack

- **Frontend:** React.js 18, Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM v6
- **Video SDK:** ZegoCloud UIKit Prebuilt (WebRTC)
- **Real-Time:** WebRTC (peer-to-peer), ZegoCloud RTMP
- **Utilities:** uuid

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A free ZegoCloud account ([console.zegocloud.com](https://console.zegocloud.com/))

### 1. Clone the repository

```bash
git clone https://github.com/your-username/connectify.git
cd connectify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure ZegoCloud

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

```env
VITE_ZEGO_APP_ID=your_app_id_here
VITE_ZEGO_SERVER_SECRET=your_server_secret_here
```

**How to get credentials:**
1. Go to [ZegoCloud Console](https://console.zegocloud.com/)
2. Sign up for a free account (10,000 minutes/month free)
3. Create a new project
4. Copy your **App ID** (number) and **Server Secret** (string)

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
connectify/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackgroundOrbs.jsx    # Animated background
│   │   ├── ConfigWarning.jsx     # ZegoCloud setup banner
│   │   ├── FeatureCard.jsx       # Feature display card
│   │   ├── Navbar.jsx            # Top navigation
│   │   └── RoomCard.jsx          # Room ID + invite link card
│   ├── hooks/
│   │   └── useClipboard.js       # Clipboard copy hook
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Join.jsx              # Join by Room ID page
│   │   ├── Room.jsx              # Video call room
│   │   └── NotFound.jsx          # 404 page
│   ├── utils/
│   │   ├── roomUtils.js          # Room ID generation & validation
│   │   └── zegoConfig.js         # ZegoCloud config loader
│   ├── App.jsx                   # Root with routing
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── .env.example                  # Environment variable template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🏗 Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Deploy to Vercel, Netlify, or any static host.

### Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

> Set your `VITE_ZEGO_APP_ID` and `VITE_ZEGO_SERVER_SECRET` in the Vercel dashboard under **Project Settings → Environment Variables**.

---

## 🔐 Security Notes

- **Never commit your `.env` file.** It's excluded via `.gitignore`.
- For production, use ZegoCloud's server-side token generation instead of `generateKitTokenForTest`.
- See [ZegoCloud Token Authentication Docs](https://docs.zegocloud.com/article/12273) for production setup.

---

## 📸 Screenshots

| Home Page | Join Room | Video Call |
|-----------|-----------|------------|
| *(Add screenshots here)* | *(Add screenshots here)* | *(Add screenshots here)* |

---

## 📝 License

MIT © 2025 – Built as part of a real-time communications portfolio project.
=======
# Connectify-Seamless-Video-Calling-Application
>>>>>>> 54d060e3ca62ff90d04c616f84a34b55836f57b5
