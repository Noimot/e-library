import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/login", { replace: true });
    }
  }, [window.location.pathname === "/"]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      Page not found{" "}
    </div>
  );
};

export default PageNotFound;
