"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import {FaEnvelope, FaLock, FaUser } from "react-icons/fa";


export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const [registerData, setRegisterData] = useState({
    Firstname: "",
    Lastname: "",
    DateOfBirth: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "male",
  });

  

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });

      const data = await res.json();
      if (data.patientId) {
        localStorage.setItem('patientId', data.ID_P); 
      } else if (data.adminId) {
        localStorage.setItem("adminId", data.adminId);
      }
      if (data.success) {
      
        await router.push(data.redirect); 
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  if (registerData.Password.length < 6) {
    setErrorMessage("Password must be at least 6 characters long!");
    return;
  }
  if (registerData.Password !== registerData.ConfirmPassword) {
    setErrorMessage("Passwords do not match!");
    return;
  }


  

  setErrorMessage("");

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log("Registration Response:", data); 

    if (data.success) {
      setRegisterData({
        Firstname: "",
        Lastname: "",
        DateOfBirth: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Gender: "male",
      });

      setIsActive(false); 
      router.push("/login");
    } else {
      setErrorMessage(data.message || "Registration failed");
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("Something went wrong");
  }
};
  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
        {/* Login Form */}
        <div className={`${styles.formBox} ${styles.login}`}>
          <form className={styles.form} onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className={styles.inputBox}>
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <span className={styles.icons}><FaEnvelope /></span>
            </div>
            <div className={styles.inputBox}>
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className={styles.icons}><FaLock /></span>
            </div>
            <div className={styles.forgot}>
              <a href="#">Forgot password?</a>
            </div>
            {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

            <button type="submit" className={styles.btn}>Login</button>

          </form>
        </div>

        {/* Registration Form */}
        <div className={`${styles.formBox} ${styles.register}`}>
          <form className={styles.form} onSubmit={handleRegister}>
            <h1 className={styles.registerName}>Registration</h1>
            
            {/* First & Last Name */}
            <div className={styles.name}>
              <div className={styles.inputBox2}>
              <input type="text" placeholder="First Name" required value={registerData.Firstname} onChange={(e) => setRegisterData({ ...registerData, Firstname: e.target.value })} />
                <span className={styles.icons}><FaUser /></span>
              </div>
              <div className={styles.inputBox2}>
              <input type="text" placeholder="Last Name" required value={registerData.Lastname} onChange={(e) => setRegisterData({ ...registerData, Lastname: e.target.value })} />
                <span className={styles.icons}><FaUser /></span>
              </div>
            </div>

            {/* Birthday */}
  <div className={`${styles.inputBox2} ${styles.birthdayBox}`}>
  <label htmlFor="birthday">Birthday</label>
  <input type="date" id="birthday" required value={registerData.DateOfBirth} onChange={(e) => setRegisterData({ ...registerData, DateOfBirth: e.target.value })} /><style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.6);
          cursor: pointer;
        }
      `}</style>
</div>

            {/* Gender */}
            <div className={styles.genderBox}>
              <label className={styles.label}>Gender :</label>
              <div className={styles.genderOptions}>
                <label htmlFor="male">
                  <input type="radio" id="male" name="gender" value="male" required checked={registerData.Gender === "male"} onChange={() => setRegisterData({ ...registerData, Gender: "male" })}/>
                  Male
                </label>
                <label htmlFor="female">
                  <input type="radio" id="female" name="gender" value="female" required checked={registerData.Gender === "female"} onChange={() => setRegisterData({ ...registerData, Gender: "female" })} />
                  Female
                </label>
              </div>
            </div>

            {/* Email */}
            <div className={styles.inputBox2}>
              <input type="email" placeholder="Email" required value={registerData.Email} onChange={(e) => setRegisterData({ ...registerData, Email: e.target.value })}/>
              <span className={styles.icons}><FaEnvelope /></span>
            </div>

            {/* Password */}
            <div className={styles.inputBox2}>
              <input type="password" placeholder="Password" required value={registerData.Password} onChange={(e) => setRegisterData({ ...registerData, Password: e.target.value })} />
              <span className={styles.icons}><FaLock /></span>
            </div>

            <div className={styles.inputBox2}>
              <input type="password" placeholder="Confirm Password" required value={registerData.ConfirmPassword} onChange={(e) => setRegisterData({ ...registerData, ConfirmPassword: e.target.value })}/>
              <span className={styles.icons}><FaLock /></span>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button type="submit" className={styles.btn}>Register</button>

          </form>
        </div>

        {/* Toggle Box */}
        <div className={styles.toggleBox}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Hello, Welcome!</h1>
            <p>Don&apos;t have an account?</p>
            <button className={styles.btn} onClick={() => setIsActive(true)}>Register</button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className={styles.btn} onClick={() => setIsActive(false)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
