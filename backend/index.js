require("dotenv").config();

const connectDB = require("./config/db");
const app = require("./app");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Process running at PORT ${process.env.PORT}`);
});
