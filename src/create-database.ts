import "reflect-metadata";
import { createConnection } from "typeorm";
import * as helmet from 'helmet';

createConnection().then(() => {
    console.log('Connection to database successful')
}).catch((err) => {
    console.log('Connection error');
    console.log(err);
});