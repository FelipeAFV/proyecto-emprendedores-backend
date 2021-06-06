import { Product } from "../model/entity/product";
import { GenericService } from "./generic-service";

class ProductService extends GenericService<Product> {

    constructor() {
        super(Product);
    }

    getByName(productName: string) {
        return super.getByConditions({where: {name: productName}});
    }
}

export default new ProductService();