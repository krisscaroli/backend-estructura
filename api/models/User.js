import mongoose from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
});

u

export default mongoose.model("User", schema);
