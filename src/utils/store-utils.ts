import { StoreCategory } from "../model/enums/store-category"

const fromStringToCategory =  (category: any): StoreCategory | undefined => {
    if(!category) return undefined;
    let currentCategory: string = category;
    
    return currentCategory as StoreCategory;

}
 
export {fromStringToCategory};