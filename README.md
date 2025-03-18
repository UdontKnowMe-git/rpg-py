
# 🧠 CodeQuest RPG  

A **gamified learning platform** where students battle villains by solving **Python coding challenges**! With dynamic health bars, multiple difficulty levels, and epic **finisher moves**, learning code feels like an **RPG adventure**.  

---

## 🚀 Tech Stack  

- **Frontend:** React (JavaScript) for UI and game logic.  
- **Backend:** FastAPI (Python) for checking code submissions.  
- **Database/Auth:** Supabase for user authentication and progress tracking.  

---

## 📂 Project Structure  

```
/codequest-rpg
│
├── /frontend  (React UI)
│   ├── components/
│   │   ├── Login.js        # Supabase authentication  
│   │   ├── Game.js         # Gameplay logic  
│   │   ├── HealthBar.js    # HP tracking  
│   │   ├── FinishScreen.js # Win/Loss + finisher move  
│   ├── styles.css         # UI styling  
│
├── /backend  (FastAPI)
│   ├── main.py            # Python code validation  
│
└── /supabase  
    ├── supabaseClient.js  # Supabase setup  
```

---

## 🎮 How It Works  

1️⃣ **User logs in** (Supabase authentication).  
2️⃣ **Enters battle** with a villain and gets **3 coding challenges**.  
3️⃣ **Each correct answer** deals **1 HP damage** to the boss.  
4️⃣ **Incorrect answers** cause the player to take damage.  
5️⃣ **Defeat the boss** and unlock an **epic finisher move**!  

---

## 🔧 Setup & Run  

1. Install dependencies:  
   ```bash
   npm install      # Install frontend packages  
   pip install -r backend/requirements.txt  # Install backend dependencies  
   ```

2. Run the backend:  
   ```bash
   uvicorn backend.main:app --reload  
   ```

3. Run the frontend:  
   ```bash
   npm start  
   ```

---

### 🔥 Future Plans  

- Add **Medium & Hard modes** with tougher logic.  
- **Leaderboard & Achievements** for player motivation.  
- **Multiplayer coding battles** for friendly competition!  

---

💡 **Built for Google Devs Sprint '25** – Turning coding into an RPG adventure!  
```
