import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { StoreManager } from "./store-manager";
import { StoreCategory } from "../enums/store-category";
import { Product} from "./product";

@Entity("store")
export class Store {

    @PrimaryGeneratedColumn({name: "store_id"})
    id: number;

    @Column({name: "name"})
    name: string;

    @Column({name: "description"})
    description: string;

    @Column({
        type: "enum",
        enum: StoreCategory,
        default: StoreCategory.GENERAL
    })
    category: StoreCategory;

    @ManyToMany( () => StoreManager, manager => manager.stores)
    managers: StoreManager[];

    @OneToMany(type=> Product, product => product.store)
    products: Product[];
}