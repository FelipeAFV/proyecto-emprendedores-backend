import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProductType } from "../enums/product-type";
import { Store } from "./store";


@Entity("products")
export class Product {

    @PrimaryGeneratedColumn({name: "product_id"})
    id: number;

    @Column({name: "name"})
    name: string;

    @Column({name: "description"})
    description: string;

    @Column({
        type: "enum",
        enum: ProductType
    })
    type: ProductType;

    @ManyToOne(type => Store, store => store.products)
    store: Store;
}