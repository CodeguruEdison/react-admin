import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';

import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client';
import generalRoutes from './routes/general';
import managementRoutes from './routes/managementRoutes';
import salesRoutes from './routes/salesRoutes';

/**
  DATA IMPORT
 */
import User from './models/user';
import { dataUser, dataProduct, dataProductStat } from './data/index';
import Product from './models/product';
import ProductStat from './models/productStat';

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
        /** ONLY ADD one time */
        // User.deleteMany({})
        // User.insertMany(dataUser);
        // Product.insertMany(dataProduct);
        //ProductStat.insertMany(dataProductStat);

    }).catch((error) => console.log(`${error} did not connect`))




