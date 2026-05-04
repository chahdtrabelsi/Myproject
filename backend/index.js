import express from "express";

const app = express();

// Parser JSON et x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test GET
app.get("/", (req, res) => {
  res.send("Backend is running 🚀,bonjour");
});

// Webhook POST dédié
app.post("/api/webhook", (req, res) => {
  console.log("Payload GitHub reçu :", req.body);
  res.status(200).send("Webhook received 🚀");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});