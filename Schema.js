const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  email: { type: String },
  password: { type: String  },
});

module.exports = mongoose.model("User", Userschema);
