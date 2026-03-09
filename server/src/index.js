import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});