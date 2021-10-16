const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

// // custom middleware
// app.use((request, response, next) => {
//     console.log("Middleware ran");
//     console.log(request.url);
//     next();
// });

// morgan middleware
app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended: true
}));

dotenv.config({
    path: './config/config.env'
});

connectDB();

app.use('/api/auth', require('./routes/user'));

// get request
app.get('/testget', (request, response) => {
    response.status(200).json({
        "message": "Hello World"
    });
});

// post request
app.post('testpost', (request, response) => {

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));