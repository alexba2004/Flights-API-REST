import mongoose from "mongoose";
mongoose
  .connect(process.env.CONNECTION_DB)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

export default mongoose;
