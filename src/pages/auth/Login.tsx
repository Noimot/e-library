import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../component/Button";
import TextInput from "../../component/TextInput";
import Auth from "./Auth";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!email || !password || role === "Select Role") {
      alert("Please fill all fields and select a role");
      return;
    }

    // Redirect based on role
    if (role === "reader") {
      navigate("/user-dashboard");
    } else if (role === "librarian") {
      navigate("/librarian-dashboard");
    }
  };
  return (
    <Auth margin="mt-28">
      <div className="bg-white w-[411px] rounded-[14px] shadow-[-5px 6px 24px rgba(0, 0, 0, 0.18)] p-5">
        <h1 className="text-center font-medium text-lg">Login to ELib</h1>
        <div>
          <div className="mt-10 space-y-6">
            <TextInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="w-full h-12 !bg-gray-200 rounded-[5px] border-0 px-3 text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              <option value="reader">Reader</option>
              <option value="librarian">Librarian / Admin</option>
            </select>
          </div>
          <div className="mt-10 cursor-pointer">
            <Button
              btnText="Login"
              btnType="submit"
              handleClick={handleLogin}
            />
          </div>
        </div>
        <p className="mt-10 text-center">
          Don't have an Account? Sign Up{" "}
          <Link to="/signup" className="text-blue-900 pl-4">
            Sign Up
          </Link>
        </p>
      </div>
    </Auth>
  );
};

export default Login;
