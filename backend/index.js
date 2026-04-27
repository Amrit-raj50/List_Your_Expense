require('dotenv').config();

const App = require('./App');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    App.listen(PORT, '127.0.0.1', () => {
        console.log(`server is running on port ${PORT}`)
    })
}

startServer();