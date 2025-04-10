"use client";
import { useState, useEffect  } from "react";
import styles from "../appointment/page.module.css";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

function AppointmentForm() {
  const [familyFname, setFamilyFname] = useState("");
  const [familyLname, setFamilyLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [patientId, setPatientId] = useState<number | null>(null); // متغير لحفظ patient_id

   // استخدام useEffect لتحميل patient_id من الـ session أو localStorage
   useEffect(() => {
    const patientId = localStorage.getItem('patientId');
    if (patientId) {
      setPatientId(Number(patientId));  // تحويل إلى رقم إذا لزم الأمر
    } else {
      console.log("Patient ID not found in localStorage");
      // أضف الكود لإعادة التوجيه إذا لم يتم العثور على patientId
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!patientId) {
      console.log("Patient ID:", patientId);
      setMessage("Patient ID is missing. Please log in first.");
      setIsSuccess(false);
      return;
    }
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_id: patientId,
        family_fname: familyFname,
        family_lname: familyLname,
        email: email,
        phone: phone,
        date: appointmentDate,
        time: appointmentTime,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("Appointment booked successfully! Waiting for confirmation.");
      setIsSuccess(true);
      setFamilyFname("");
      setFamilyLname("");
      setEmail("");
      setPhone("");
      setAppointmentDate("");
      setAppointmentTime("");
    } else {
      setMessage("Booking failed: " + data.message);
      setIsSuccess(false);
    }
  };

  return (
    <div>
    <Navbar /> 
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.h1}>Appointment</h1>
        <div className={styles.subtitle}>Book an Appointment for Your Family</div>
        <p className={styles.description}>
          Our Health Ai+ platform allows you to easily and quickly book appointments. Save time and avoid long waits on the phone.
        </p>
        <div className={styles.phoneNumber}>
          Or call us at <a href="tel:+212600000000">+213 726 25 04 00</a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.formTitle}>Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input className={styles.input}
                type="text"
                placeholder=" First Name"
                value={familyFname}
                onChange={(e) => setFamilyFname(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input}
                type="text"
                placeholder=" Last Name"
                value={familyLname}
                onChange={(e) => setFamilyLname(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <input className={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input className={styles.input}
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input className={styles.input}
                type="date"
                id="date"
                name="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
  />
  <style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.6);
          cursor: pointer;
        }`}</style>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input}
                type="time"
                id="time"
                name="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
                <style jsx>{`
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(0.6);
          cursor: pointer;
        }`}</style>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
          </button>
          {message && (
              <p
              style={{
                color: isSuccess ? "#16a34a" : "#dc2626", // أخضر أو أحمر
                marginTop: "0.5rem" // mt-2
              }}
            >
              {message}
            </p>
            
                   )}
        </form>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  
  );
}

export default AppointmentForm;
