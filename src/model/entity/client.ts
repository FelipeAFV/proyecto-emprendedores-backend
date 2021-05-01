import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";

@Entity("client")
export class Client {

    @PrimaryGeneratedColumn({name: "client_id"})
    id: number;

    @OneToOne( () => Profile)
    @JoinColumn({name: "profile_id"})
    profile: Profile;
}