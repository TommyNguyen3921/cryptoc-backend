import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';

const app = express();
//posts will be the start in the routes
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


app.use('/users', userRoutes);

app.get('/',(req,res) => {
    res.send('hello to crypto api');
});


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true })
.then(() => app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

