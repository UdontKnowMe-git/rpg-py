import { supabase } from "./supabaseClient.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            errorMessage.textContent = "❌ Invalid email or password";
        } else {
            console.log("✅ Logged in:", data.user.email);
            window.location.href = "index.html"; // Redirect to game page
        }
    } catch (err) {
        console.error("Login error:", err);
        errorMessage.textContent = "⚠️ Something went wrong, try again!";
    }
});

export default Login;