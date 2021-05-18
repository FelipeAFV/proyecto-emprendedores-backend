import { Profile } from "model/entity/profile";
import { AppRole } from "model/enums/app-role";

export interface UserPayload {
    role: AppRole,
    id?: number
}