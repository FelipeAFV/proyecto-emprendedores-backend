import { AppCategories } from "../model/enums/app-category"

const fromStringToCategory =  (category: any): AppCategories | undefined => {
    if(!category) return undefined;
    let currentCategory: string = category;
    
    return currentCategory as AppCategories;

}
 
export {fromStringToCategory};