import { Column, Entity, OneToMany, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Profile } from "./profile";
import {MinLength} from 'class-validator';


@Entity("user")
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn({name: "user_id"})
    id: number;

    @Column({name: "username"})
    @MinLength(8)
    username: string;
    
    @Column({name: "password"})
    @MinLength(8)
    password: string;

    @OneToMany(() => Profile, profile => profile.user )
    profiles: Profile[];

}