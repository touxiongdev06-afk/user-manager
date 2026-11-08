const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const client = new MongoClient("mongodb://localhost:27017");

app.use(express.json());
app.use(express.static("public"));

// ดึงรายชื่อ
app.get("/api/users", async (req, res) => {
  const users = client.db("myfirstdb").collection("User");
  const data = await users.find().toArray();
  res.json(data);
});

// เพิ่มรายชื่อ
app.post("/api/users", async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "กรุณากรอกชื่อและอายุ" });
  }

  const users = client.db("myfirstdb").collection("User");
  await users.insertOne({ name: name, age: Number(age) });
  res.json({ message: "บันทึกสำเร็จ" });
});

// แก้ไขรายชื่อ
app.put("/api/users/:id", async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "กรุณากรอกชื่อและอายุ" });
  }

  const users = client.db("myfirstdb").collection("User");
  await users.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { name: name, age: Number(age) } }
  );
  res.json({ message: "แก้ไขสำเร็จ" });
});

// ลบรายชื่อ
app.delete("/api/users/:id", async (req, res) => {
  const users = client.db("myfirstdb").collection("User");
  await users.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ message: "ลบสำเร็จ" });
});

async function start() {
  await client.connect();
  app.listen(3000, () => console.log("เปิดที่ http://localhost:3000"));
}

start();