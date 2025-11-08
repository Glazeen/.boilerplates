import app from "./app";
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ name: "express-template", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
