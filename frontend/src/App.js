import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Game from "./Game";

function App() {
    const [user, setUser] = useState(null);

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
            <h1>Welcome to PyRPG, {user.email}!</h1>
            <Game />
            <button onClick={() => supabase.auth.signOut().then(() => window.location.href = "/login_page.html")}>
                Logout
            </button>
        </div>
    );
}

export default App;
