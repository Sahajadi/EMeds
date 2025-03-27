import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectIfAuthenticated = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
}

export default RedirectIfAuthenticated;