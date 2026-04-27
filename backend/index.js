require('dotenv').config();

const App = require('./App');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    App.listen(PORT, '0.0.0.0', () => {
        console.log(`server is running on port ${PORT}`)
    })
}

startServer();