import { StoreManager } from "../model/entity/store-manager";
import { GenericService } from "./generic-service";

class StoreManagerService extends GenericService<StoreManager> {
    
    constructor() {
        super(StoreManager);
    }
}

export default new StoreManagerService();