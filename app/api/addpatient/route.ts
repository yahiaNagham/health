import { NextRequest } from 'next/server'; // استيراد NextRequest
import { NextResponse } from 'next/server'; // استيراد NextResponse
import db from '../../../lib/db'; // تعديل المسار حسب مكان قاعدة البيانات
import bcrypt from 'bcryptjs';

// التصدير المسمى للطريقة POST
export async function POST(req: NextRequest) {
  const { Firstname, Lastname, DateOfBirth, Email, Password, Gender } = await req.json();  // قراءة البيانات بتنسيق JSON

  // التحقق من صحة المدخلات
  if (!Firstname || !Lastname || !DateOfBirth || !Email || !Password || !Gender) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    // تشفير كلمة المرور قبل التخزين
    const hashedPassword = await bcrypt.hash(Password, 10);

    // إدخال البيانات في قاعدة البيانات
    const result = await db.execute(
      `INSERT INTO patient (Firstname, Lastname, DateOfBirth, Email, Password, Gender)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [Firstname, Lastname, DateOfBirth, Email, hashedPassword, Gender]
    );

    return NextResponse.json({ message: 'Patient added successfully', result });
  } catch (error) {
    console.error(error); // تسجيل الأخطاء في الخادم
    return NextResponse.json({ error: 'Error adding patient' }, { status: 500 });
  }
}
