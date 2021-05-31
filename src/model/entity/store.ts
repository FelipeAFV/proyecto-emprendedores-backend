import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { StoreManager } from "./store-manager";
import { AppCategories } from "../enums/app-category";

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
        enum: AppCategories,
        default: AppCategories.GENERAL
    })
    category: AppCategories;

    @ManyToMany( () => StoreManager, manager => manager.stores)
    managers: StoreManager[];
}