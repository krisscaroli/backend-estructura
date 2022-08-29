import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  birthday: Date,
  address: String,
  references: [
    {
      name: String,
      phone: String,
      email: String,
    },
  ],
  email: String,
  phone: String,
});

export default mongoose.model("Client", schema);
