import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("admin")
export class Admin {

    @PrimaryGeneratedColumn({name: "admin_id"})
    id: number;

    @OneToOne( () => Profile)
    @JoinColumn({name: "profile_id"})
    profile: Profile;
}