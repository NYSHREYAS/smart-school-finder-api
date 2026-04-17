require("dotenv").config();
console.log("ENV PASSWORD:", process.env.DB_PASSWORD);
const express = require("express");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", schoolRoutes);

app.get("/", (req, res) => {
    res.json({ message: "School Management API is running ✅" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
