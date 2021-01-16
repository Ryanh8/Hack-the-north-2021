const express = require('express');
const app = express();
const cors = require("cors");

//allows requests to be made from any ip/domain
app.use(cors());

//connect database
//connectDB();

//Init Middleware
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('API Running')); 

//Define routes


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));