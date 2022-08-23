import mongoose from "mongoose";

const db = mongoose.connection;

db.on("connecting", () => {
  console.log("conectando");
});
db.on("connected", () => {
  console.log("conectado");
});
db.on("error", () => {
  console.log("Error ❤");
});

export default () => {
  mongoose.connect("mongodb://127.0.0.1/library");
};
