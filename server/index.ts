import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';

import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/clientRoutes';
import generalRoutes from './routes/generalRoutes';
import managementRoutes from './routes/managementRoutes';
import salesRoutes from './routes/salesRoutes';

/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("management", managementRoutes);
app.use("/sales", salesRoutes);
/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
const url = process.env.MONGO_URL || '';
console.log({ url });
mongoose.set('strictQuery', false);
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions)
    .then(() => {
        app.listen(PORT, () => console.log(`Server PORT:${PORT}`));
    }).catch((error) => console.log(`${error} did not connect`))




