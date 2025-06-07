// AuthRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthRedirect = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "https://e-trade-n953.onrender.com", // AuthMiddleware
          {},
          { withCredentials: true }
        );

        if (data.status) {
          // Redirect to dashboard
          window.location.href = "https://e-trade-1-qp0j.onrender.com"; // or actual dashboard URL
        } else {
          navigate("/login");
        }
      } catch {
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate]);

  return null;
};

export default AuthRedirect;
