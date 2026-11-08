const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const users = client.db("myfirstdb").collection("User");

  console.log("อายุ 28 ขึ้นไป:");
 console.log(await users.find({ age: { $lt: 30 } }).toArray());

  console.log("ชื่อสมชาย:");
  console.log(await users.find({ name: "สมชาย" }).toArray());

  console.log("อายุ 25-28:");
  console.log(await users.find({ age: { $gte: 25, $lte: 28 } }).toArray());

  await client.close();
}

main();