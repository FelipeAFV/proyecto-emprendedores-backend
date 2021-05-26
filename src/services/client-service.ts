import { Profile } from "model/entity/profile";
import { AppRole } from "model/enums/app-role";
import { Person } from "model/person";
import { Client } from "../model/entity/client";
import { GenericService } from "./generic-service";
import { PersonService } from "./person-service";

export class ClientService extends GenericService<Client> implements PersonService {

    constructor() {
        super(Client);
    }

    saveDefault = (associatedProfile: Profile) : Promise<Client> => {
        return super.create({id: 0, favorite_stores: [], profile: associatedProfile});
    }
    
}

export default new ClientService();