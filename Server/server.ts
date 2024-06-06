import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import dotenv  from 'dotenv';
dotenv.config( )

const app = express( );

app.use(routes);
app.use(cors);
app.use(express.json( ));


app.listen(8080, ( )=>console.log('node js + typescript connected'))

