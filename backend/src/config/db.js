const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoBD connected successfully')
    } catch (error) {
        console.error('mongoDB connection failed :',error);
        process.exit(1);
    }
}

module.exports = connectDB;