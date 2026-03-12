const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const multer = require("multer");

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

// const usersFile = path.join(__dirname, "users.json");

// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   const users = JSON.parse(fs.readFileSync(usersFile));

//   const user = users.find((u) => u.email === email && u.password === password);

//   if (!user) {
//     return res.json({ success: false });
//   }

//   res.json({ success: true, user });
// });

// app.post("/api/register", (req, res) => {
//   const { email, password } = req.body;

//   let users = JSON.parse(fs.readFileSync(usersFile));

//   const newUser = {
//     id: Date.now(),
//     email,
//     password,
//   };

//   users.push(newUser);

//   fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

//   res.json({ success: true });
// });

// const storage = multer.diskStorage({
//   destination: "images",

//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/contact.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/register.html"));
});

app.get("/marketplace", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/marketplace.html"));
});

app.get("/seller", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/pages/seller.html"));
});


// app.get("/api/products", (req, res) => {
//   const products = JSON.parse(fs.readFileSync("products.json"));

//   res.json(products);
// });

app.get("/frontend/assets/icons/icons.png", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/assets/icons/icons.png"));
});

// app.post("/api/upload", upload.single("image"), (req, res) => {
//   let products = JSON.parse(fs.readFileSync("products.json"));

//   const product = {
//     id: Date.now(),

//     title: req.body.title,

//     price: req.body.price,

//     image: req.file.filename,
//   };

//   products.push(product);

//   fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

//   res.json(product);
// });

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
