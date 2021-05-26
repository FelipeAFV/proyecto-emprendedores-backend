import { AppRole } from "../model/enums/app-role"

const fromStringToAppRole =  (role: any): AppRole | undefined => {
    let roleParsed: string = role;
    roleParsed = roleParsed.toUpperCase();
    return role == AppRole.ADMIN ? AppRole.ADMIN : 
        (role == AppRole.CLIENT ? AppRole.CLIENT : 
        (role == AppRole.STORE_MANAGER ? AppRole.STORE_MANAGER : undefined));

}

export {fromStringToAppRole};