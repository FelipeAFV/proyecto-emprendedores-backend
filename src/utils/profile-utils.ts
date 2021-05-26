import { AppRole } from "../model/enums/app-role"

const fromStringToAppRole =  (role: any): AppRole | undefined => {
    if(!role) return undefined;
    let roleParsed: string = role;
    roleParsed = roleParsed.toUpperCase();
    return roleParsed == AppRole.ADMIN ? AppRole.ADMIN : 
        (roleParsed == AppRole.CLIENT ? AppRole.CLIENT : 
        (roleParsed == AppRole.STORE_MANAGER ? AppRole.STORE_MANAGER : undefined));

}
 
export {fromStringToAppRole};