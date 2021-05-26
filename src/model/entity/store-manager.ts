import { Person } from "../person";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Store } from "./store";

@Entity("store_manager")
export class StoreManager extends Person {

    @PrimaryGeneratedColumn({name: "store_manager_id"})
    id: number;
 
    @OneToOne( () => Profile)
    @JoinColumn({name: "profile_id"})
    profile: Profile;

    @ManyToMany( () => Store, store => store.managers)
    @JoinTable({
        name: "managers_stores",
        joinColumn: {
            name: "manager_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "store_id",
            referencedColumnName: "id"
        }
    })
    stores: Store[];

}