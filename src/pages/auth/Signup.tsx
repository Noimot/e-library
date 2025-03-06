import { Link } from "react-router-dom";
import { Button } from "../../component/Button";
import TextInput from "../../component/TextInput";
import Auth from "./Auth";
import FileInput from "../../component/FileInput";

const Signup = () => {
  return (
    <Auth>
      <div className="bg-white w-[411px] rounded-[14px] shadow-[-5px 6px 24px rgba(0, 0, 0, 0.18)] p-5">
        <h1 className="text-center font-medium text-lg">
          Register to be an ELib Member
        </h1>
        <div>
          <div className="mt-10 space-y-6">
          <div className="flex justify-center items-center">
            <FileInput />
          </div>
            <TextInput type="email" placeholder="Email Address" />
            <TextInput type="text" placeholder="Phone Number" />
            <TextInput type="password" placeholder="Password" />
            <TextInput type="password" placeholder="Confirm password" />
          </div>
          <div className="mt-10">
            <Button btnText="Sign Up" btnType="button" />
          </div>
        </div>
        <p className="mt-10 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-900 pl-4">
            Login
          </Link>
        </p>
      </div>
    </Auth>
  );
};

export default Signup;
