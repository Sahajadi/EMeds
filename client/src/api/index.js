// import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const handleLogin = async (e, {email, password}) => {
    // const navigate = useNavigate();
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
        alert(res.data.message);
        console.log(res.data);
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            // navigate('/');
            // return true;
            window.location.href="/";
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert(error.response?.data?.message || "Login failed! Please try again.");
        // return false;
    }
};

export const handleRegister = async (e, {name, email, password}) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
        alert(res.data.message);
        window.location.href="/login";
    } catch {
        alert('Registration failed!');
    }
};