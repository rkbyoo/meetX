require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const userRoutes = require('./routes/user');
const activityRoutes = require('./routes/activity');
const bookingRoutes = require('./routes/booking');

const app = express();
connectDB();

app.use(cors()); // Allow all origins (for development/testing)
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/",async(req,res)=>{
    res.send("this is the home page")
})