import { Admin } from "../model/entity/admin";
import { GenericService } from "./generic-service";

class AdminService extends GenericService<Admin> {

    constructor() {
        super(Admin);
    }
}

export default new AdminService();