const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb+srv://oluwatomisin:oluwatomisin@cluster0.tdbfd3h.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log(`mongoDb connected ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
