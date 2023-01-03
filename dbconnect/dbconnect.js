const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongoDb connected ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
