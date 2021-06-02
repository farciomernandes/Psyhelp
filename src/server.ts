import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, ()=>{
    console.log('Project is runing in port 3333')
})