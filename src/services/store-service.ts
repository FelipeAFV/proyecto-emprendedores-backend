import { Store } from "../model/entity/store";
import { GenericService } from "./generic-service";

class StoreService extends GenericService<Store> {

    constructor() {
        super(Store);
    }

    getByName(storeName: string) {
        return super.getByConditions({where: {name: storeName}});
    }
}

export default new StoreService();