import { Person } from "../person";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import {Store} from "./store"

@Entity("client")
export class Client extends Person{

    @PrimaryGeneratedColumn({name: "client_id"})
    id: number;

    @OneToOne( () => Profile,{cascade : true})
    @JoinColumn({name: "profile_id"})
    profile: Profile;

    @ManyToMany( () => Store)
    @JoinTable({
        name: "client_favorite_stores",
        joinColumn: {
            name: "client_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "store_id",
            referencedColumnName: "id"
        }
    })
    favorite_stores: Store[];
}