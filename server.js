const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/collegeFestival', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a simple schema
const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    venue: String,
});

const Event = mongoose.model('Event', eventSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit_registration', (req, res) => {
    // Handle registration logic here
    res.send('Registration submitted!');
});

app.post('/process_payment', (req, res) => {
    // Handle payment processing here
    res.send('Payment processed!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
