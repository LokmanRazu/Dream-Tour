const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});

const app = express();
app.use(express.json())


app.use(cors({
    origin: '*'
}));




// Import Routes
const placeRouter = require('./routes/placesRoutes')

app.use('/api/v1',placeRouter)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:'fail',
        message:`Can't find ${req.originalUrl} on this server`
    })
});

const db = process.env.DATABASE.replace('<password>',process.env.db_password)
mongoose.connect(db,{
    useNewUrlParser:true              
})
.then(con =>{
    console.log('DB Connection successfull')
});





const PORT =process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`app is running in ${PORT}`);
})