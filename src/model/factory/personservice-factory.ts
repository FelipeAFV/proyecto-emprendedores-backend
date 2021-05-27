import { AppRole } from "../enums/app-role";
import { AdminService } from "../../services/admin-service";
import {ClientService} from "../../services/client-service";
import { PersonService } from "../../services/person-service";
import { StoreManagerService } from "../../services/storemanager-service";

class PersonServiceFactory {

    createPersonServiceFromRole(personRole : AppRole): PersonService {
        switch (personRole) {
            case AppRole.ADMIN:
                return new AdminService();
                break;
                
            case AppRole.CLIENT:
                return new ClientService();
                break;

            case AppRole.STORE_MANAGER:
                return new StoreManagerService();
                break;
        }
    }
}

export default new PersonServiceFactory();