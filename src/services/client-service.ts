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
    getPerson (currentProfile: Profile) {
        return super.getByConditions({where: { profile: currentProfile }});
    }

    saveDefault = (associatedProfile: Profile) : Promise<Client> => {
        return super.create({id: 0, favorite_stores: [], profile: associatedProfile});
    }

    //deleteStore(store_id: number) {
      //  return super.deleteById(store_id);
    //}
    
}

export default new ClientService();