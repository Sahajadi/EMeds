import { Navigate } from "react-router-dom";
// import axios from "axios";

export default function Protected({ children }) {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    if (!userdata.token) {
       return <Navigate to="/login" replace />;
    }

    if (userdata.role === "admin") {
       return <Navigate to="/admin" replace />;
    }
    return children;
} 