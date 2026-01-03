import { useState } from 'react'
import style from '../Signup/Signup.module.css'
import { FaUser,FaLock } from "react-icons/fa";
import { IoMdMail,IoIosMail } from "react-icons/io"

const Signup = () => {
  const [form,setForm] = useState(true);
  let update = ()=>{
    setForm(!form)
  }
  return (
    <>
    {
       form ? (
        <>
          <div className={style.container}>
          <h1>Signup Form</h1>
          
          <div className={style.inputBox}>
            <input type="text" name="" id="" placeholder="Enter Your First Name"/>
            <FaUser className={style.icon}/>
          </div>
          <div className={style.inputBox}>
            <input type="text" name="" id="" placeholder="Enter Your Last Name"/>
            <FaUser className={style.icon}/>
          </div>
          <div className={style.inputBox}>
            <input type="email" name="" id="" placeholder="Enter Your Email Address"/>
            <IoMdMail className={style.icon}/>
          </div>
          <div className={style.inputBox}>
            <input type="password" name="" id="" placeholder="Enter Your Password"/>
            <FaLock className={style.icon}/>
    
          </div>
          <div className={style.rememberForget}>
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <div className={style.btnGroup}>
            <button className={style.login}>Signup</button>
           
          </div>
          <div className={style.registerLink}>
            <p>Already have an account ? <a href="#" onClick={update}>{form ? "Login" : "Signup"}</a></p>
          </div>
        </div>
        </>
       ):(
        
        <>
        <div className={style.container}>
              <h1>Login Form</h1>
              <div className={style.inputBox}>
                <input type="email" name="" id="" placeholder="Enter Your Email Address"/>
                <IoIosMail className={style.icon}/>
                
              </div>
              <div className={style.inputBox}>
                <input type="password" name="" id="" placeholder="Enter Your Password"/>
                <FaLock className={style.icon}/>
        
              </div>
              <div className={style.rememberForget}>
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password?</a>
              </div>
              <div className={style.btnGroup}>
                <button className={style.login}>Login</button>
               
              </div>
              <div className={style.registerLink}>
                <p>Don't have an account ? <a href="#" onClick={update}>{form ? "Login" : "Signup"}</a></p>
              </div>
            </div>
        </>
       )
    }
    
    </>
  )
}

export default Signup
