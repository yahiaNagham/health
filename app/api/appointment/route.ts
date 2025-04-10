import { NextResponse } from 'next/server';
import db from '../../../lib/db';



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { patient_id, family_fname, family_lname, email, phone, date, time } = body;
    console.log("Received data:", { patient_id, family_fname, family_lname, email, phone, date, time });
    
    // تحقق من الحقول المطلوبة
    if (!patient_id || !family_fname || !family_lname || !email || !phone || !date || !time) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // استعلام لإضافة الحجز بالحالة الافتراضية (Pending)
    const query = `
      INSERT INTO appointment (patient_id, family_fname, family_lname, email, phone, date, time)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [patient_id, family_fname, family_lname, email, phone, date, time]);

    return NextResponse.json({ message: "Appointment booked successfully. Awaiting admin approval." }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ message: "Error booking the appointment" }, { status: 500 });
  }
}
