import { Store } from "../model/entity/store";
import { GenericService } from "./generic-service";

class StoreService extends GenericService<Store> {

    constructor() {
        super(Store);
    }
}

export default new StoreService();