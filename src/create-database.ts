import "reflect-metadata";
import { createConnection } from "typeorm";




createConnection().then(() => {
    console.log('Connection to database successful')
}).catch((err) => {
    console.log('Connection error');
    console.log(err);
});