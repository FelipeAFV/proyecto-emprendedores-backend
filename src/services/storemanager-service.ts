import { Profile } from "model/entity/profile";
import { Store } from "model/entity/store";
import { StoreManager } from "../model/entity/store-manager";
import { GenericService } from "./generic-service";
import { PersonService } from "./person-service";

export class StoreManagerService extends GenericService<StoreManager> implements PersonService{
    
    constructor() {
        super(StoreManager);
    }

    getPerson (currentProfile: Profile) {
        return super.getByConditions({where: { profile: currentProfile }, relations: ['stores']});
    }

    saveDefault = (associatedProfile: Profile) : Promise<StoreManager> => {
        return super.create({id: 0, profile: associatedProfile, stores: []});
    }
}

export default new StoreManagerService();