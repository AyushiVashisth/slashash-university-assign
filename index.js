const express = require("express");
const app = express();
const path = require("path");
const universityRoutes = require("./routes/universityRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/universities", universityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
