import express from "express";

const app = express();

// Parser le JSON
app.use(express.json());

// Parser l'URL-encoded (pour x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Test GET
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Webhook POST
app.post('/', (req, res) => {
  console.log('Payload GitHub reçu :', req.body);   
  res.status(200).send('Webhook received 🚀');
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});