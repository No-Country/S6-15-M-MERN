import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {router} from './routes/auth.routes';
import dbConnect from './config/mongo'

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnect().then(() => console.log('conexion ready'));

// Definir endpoints
// app.use('/register')
// app.use('/login')
// app.use('/')

app.get('/', (req,res) => {
  res.json({message: 'Welcome to myAPI'})
})

app.listen(PORT, ()=> {
  console.log(`Server started at port: ${PORT}`);
});