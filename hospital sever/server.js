// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appoinmentsRouter = require('./routes/appointments')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    'mongodb+srv://lavanyasadvika1808:Sadvika@18082003@cluster0.lj7yj7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appoinmentsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
