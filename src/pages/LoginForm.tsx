import "./LoginForm.css";
import { Link,useNavigate } from "react-router-dom";
//import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";
import { useDispatch } from "react-redux";
import {auth,handlingChange} from "../Features/loginSlice"
import { toast } from "react-toastify";
import { useState } from "react";
const LoginForm = () => {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
    //const pageNavigate = useNavigate()
    const [loginInfo,setLoginInfo] = useState({
        email : "",
        password : ""
    })
    const changeHandler = (e) => {
      //const name = e.target.name
      //const value = e.target.value

      //dispatch(handlingChange({name , value}))
        setLoginInfo({
            ...loginInfo,
            [e.target.name] : e.target.value
    })
    }
   
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };


    const submitHandler = (e) => {
        e.preventDefault()
         //dispatch(getTasks())
         dispatch(auth({onSuccess :() => {navigateTo("/")},onFail: () => {},loginInfo}))
    }


    

    



  return (
    <form className="form mx-auto mt-4" onSubmit={submitHandler}>
  <p className="form-title">Log in to your account</p>
  <div className="input-container">
    <input type="email" name="email" placeholder="Enter email" onChange={changeHandler}/>
    <span></span>
  </div>
  <div className="input-container">
    <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter password"onChange={changeHandler}/>
  </div>
  <button type="submit" className="submit">
    Log in
  </button>
  <button
          type="button"
          className="password-toggle-button bg-info"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
  <p className="signup-link">
    No account?
    <Link to={'/signUp'}>Sign Up</Link>
  </p>
</form>
  );
};

export default LoginForm;
