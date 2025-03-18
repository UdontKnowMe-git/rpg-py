import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function App() {
    const [user, setUser] = useState(null);

    // Check if user is logged in
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                window.location.href = "/login_page.html";
            } else {
                setUser(user);
            }
        };
        fetchUser();
    }, []);

    if (!user) return <h2>Loading...</h2>;

    return (
        <div className="App">
            <h1>Welcome to CodeQuest RPG, {user.email}!</h1>
            <p>Prepare for battle! Solve Python challenges to defeat the boss.</p>
            <button onClick={() => supabase.auth.signOut().then(() => window.location.href = "/login_page.html")}>
                Logout
            </button>
            {/* Placeholder for your Game Component */}
        </div>
    );
}

export default App;
