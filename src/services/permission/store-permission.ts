import { Store } from "model/entity/store";
import { StoreManager } from "model/entity/store-manager";
import storeManagerService from "../storemanager-service";
class StorePermissionService {

    async isStoreOwner(storeManagerId: number |undefined , storeName: string): Promise<boolean> {
        const storeManager: StoreManager | undefined = await storeManagerService.getByConditions({where: {id: storeManagerId}, relations: ['stores']});
        if (!storeManager) return false;
        const managedStores = storeManager.stores;
        const storeRequired: Store | undefined = managedStores.find( store => store.name == storeName);
        if(!storeRequired) return false;
        return true;
    }
}

export default new StorePermissionService();