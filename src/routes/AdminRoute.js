import { useState, useEffect } from "react";
import { useAuth } from "../provider/Authprovider";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        if (auth?.token) {
          const res = await axios.get("api");
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      }
    };
    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
