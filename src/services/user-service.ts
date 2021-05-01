import { User } from "../model/entity/user";
import { GenericService } from "./generic-service";


class UserService extends GenericService<User>{

    constructor() {
        super(User);
    }
}

export default new UserService();