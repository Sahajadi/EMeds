import { Navigate } from "react-router-dom";
// import axios from "axios";

export default function Protected({ children }) {
    const token = localStorage.getItem("token");
    if (!token) {
       return <Navigate to="/login" replace />;
     }
     return children;
} 