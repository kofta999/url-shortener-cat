const mongoose = require("mongoose");

export default function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Successfully connected to DB"))
    .catch((error) =>
      console.log("Error happened while connecting to DB", error)
    );
}
