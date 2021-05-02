import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(() => {
    console.log('Connection successful')
}).catch((err) => {
    console.log('Connection error');
    console.log(err);
});