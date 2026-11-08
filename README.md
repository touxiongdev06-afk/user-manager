# User Manager

เว็บแอปจัดการรายชื่อผู้ใช้ (CRUD) สร้างด้วย Node.js, Express และ MongoDB

## ฟีเจอร์
- เพิ่ม ดู แก้ไข ลบรายชื่อผู้ใช้
- ตรวจสอบข้อมูลก่อนบันทึก
- หน้าเว็บตอบสนองกับมือถือ

## เทคโนโลยีที่ใช้
- Node.js + Express (Backend / REST API)
- MongoDB (ฐานข้อมูล)
- HTML, CSS, JavaScript (Frontend)

## วิธีรันโปรเจกต์
1. ติดตั้ง Node.js และ MongoDB
2. โคลนโปรเจกต์
   git clone https://github.com/touxiongdev06-afk/user-manager.git
3. ติดตั้งไลบรารี
   npm install
4. เปิด MongoDB แล้วรันเซิร์ฟเวอร์
   node server.js
5. เปิดเบราว์เซอร์ที่ http://localhost:3000

## API
| Method | Path | หน้าที่ |
|---|---|---|
| GET | /api/users | ดึงรายชื่อทั้งหมด |
| POST | /api/users | เพิ่มรายชื่อ |
| PUT | /api/users/:id | แก้ไขรายชื่อ |
| DELETE | /api/users/:id | ลบรายชื่อ |