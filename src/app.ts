import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import { getEmployees } from './controllers/employees.controller';

const app = express();

const PORT: string | number = process.env.PORT || 4000;

// app.use(cors);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

const uri = `mongodb://localhost:27017/employeeIdeaDB`;

mongoose.connect(uri)
.then(() =>{
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
})
.catch((error) => {
    throw error;
})