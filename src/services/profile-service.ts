import { Profile } from "../model/entity/profile";
import { GenericService } from "./generic-service";

class ProfileService extends GenericService<Profile> {

    constructor() {
        super(Profile);
    }
}

export default new ProfileService();