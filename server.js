const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the contactKeepr APIs'});
});

const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

//app.use(app.require('./routes/users'));
//routes.initialize(app);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})