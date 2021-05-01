import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { AppRole } from "../enums/app-role";

@Entity("profile")
export class Profile {

    @PrimaryGeneratedColumn({name : "profile_id"})
    id: number; 

    @Column({
        type: "enum",
        enum: AppRole,
        default: AppRole.CLIENT
    })
    role: AppRole;
    
    @Column({name: "first_name"})
    firstName: string;
    
    @Column({name: "last_name"})
    lastName: string;
    
    @Column({name: "email"})
    email: string;

    @ManyToOne( () => User)
    @JoinColumn({name: "user_id"})
    user: User;
}