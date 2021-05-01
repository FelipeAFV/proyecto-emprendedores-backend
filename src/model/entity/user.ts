import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";


@Entity("user")
export class User {

    @PrimaryGeneratedColumn({name: "user_id"})
    id: number;

    @Column({name: "username"})
    username: string;
    
    @Column({name: "password"})
    password: string;

    @OneToMany(() => Profile, profile => profile.user )
    profiles: Profile[];

}