import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { StoreManager } from "./store-manager";

@Entity("store")
export class Store {

    @PrimaryGeneratedColumn({name: "store_id"})
    id: number;

    @Column({name: "name"})
    name: string;

    @ManyToMany( () => StoreManager, manager => manager.stores)
    managers: StoreManager[];
}