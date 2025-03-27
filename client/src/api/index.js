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
            localStorage.setItem("userdata", JSON.stringify({'token': res.data.token, "role": res.data.role}));
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

export const createProduct = async (e, {productdata}) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/products/createProduct', productdata);
        alert(res.data.message);
        // window.location.href="/admin";
    } catch {
        alert('Product creation failed!');
    }
};

export const getProducts = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/products/getProducts');
        return res.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};