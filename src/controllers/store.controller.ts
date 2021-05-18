import { Request, Response, Router } from "express";
import storeService from "../services/store-service";


class StoreController {

    async getStoreByName(req: Request, res: Response) {
        const storeName = req.params.storeName;
        const store = await storeService.getByName(storeName);
        console.log(store);
        if (!store) return res.status(200).json({message: 'No store found'});
        res.status(200).json(store);
    }
}

export default new StoreController();