import { Profile } from "model/entity/profile";
import { Admin } from "../model/entity/admin";
import { GenericService } from "./generic-service";
import { PersonService } from "./person-service";

export class AdminService extends GenericService<Admin> implements PersonService {

    constructor() {
        super(Admin);
    }

    getPerson (currentProfile: Profile) {
        return super.getByConditions({where: { profile: currentProfile }});
    }

    saveDefault = (associatedProfile: Profile) : Promise<Admin> => {
        return super.create({id: 0, profile: associatedProfile});
    }
}

export default new AdminService();