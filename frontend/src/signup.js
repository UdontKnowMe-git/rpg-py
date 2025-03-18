import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('signup-error-message');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    } else {
        alert('Sign-up successful! Redirecting to login...');
        window.location.href = 'login_page.html';
    }
});

export default Signup;