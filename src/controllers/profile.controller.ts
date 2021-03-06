import { Request, Response } from "express";
import { Profile } from "../model/entity/profile";
import { AppCookie } from "../model/enums/app-cookies";
import { AppRole } from "../model/enums/app-role";
import {fromStringToAppRole} from "../utils/profile-utils";
import profileService from "../services/profile-service";
import jwtService from "../services/token/jwt-service";
import { User } from "model/entity/user";
import personserviceFactory from "../model/factory/personservice-factory";
import { PersonService } from "../services/person-service";


class ProfileControler { 

    async createProfile(req: Request, res: Response) {

        const {role, email, firstName, lastName} = req.body;
        console.log(req.payload.profileId);
        const currentProfile: Profile | undefined = await profileService.getByConditions({where: {id: req.payload.profileId},
        relations: ['user']});
        console.log(currentProfile);
        if (!currentProfile) return res.status(500).json({message: 'Error in request prosessing'});

        /**Se comienza con el proceso de crear perfil */
        const appRoleToCreate: AppRole | undefined = fromStringToAppRole(role);
        if(!appRoleToCreate) return res.status(400).json({message: 'Error in request'});
        
        const profileCreated: Profile = await profileService.create({id: 0 ,role: appRoleToCreate, email: email, firstName: firstName, lastName: lastName, user: currentProfile.user});

        /**Se crea la entidad asociada al perfil */
        const personService : PersonService = personserviceFactory.createPersonServiceFromRole(appRoleToCreate);
        personService.saveDefault(profileCreated);

        // /**Se crea la entidad asociada al perfil */
        // if (appRoleToCreate === AppRole.STORE_MANAGER) {
        //     storeManagerService.create({id: 0, profile: profileCreated, stores: []});

        // } else if (appRoleToCreate === AppRole.ADMIN) {
        //     adminService.create({id: 0, profile: profileCreated});
        // }

        /**Se cambian datos en cookie para operar con el nuevo perfil */
        res.clearCookie(AppCookie.JWT);
        jwtService.setJwtInCookie({role: profileCreated.role, profileId: profileCreated.id }, res);
        return res.status(200).json({message: 'Profile created successfully', profile: profileCreated});
    }

    async changeProfile(req: Request, res: Response){
        const requiredRole: AppRole | undefined = fromStringToAppRole(req.body.role); 
        const currentProfile: Profile | undefined = await profileService.getByConditions({where: {id: req.payload.profileId},
            relations: ['user']});
        if (!currentProfile) return res.status(500).json({message: 'Error in request prosessing'});
        const currentUser : User | undefined = currentProfile.user;
        console.log(currentUser);

        const profileToChange = await profileService.getByConditions({where:{user: currentUser,role: requiredRole}})
        if (!profileToChange) return res.status(500).json({message: 'Error no profile found that match conditions'});

        res.clearCookie(AppCookie.JWT);
        jwtService.setJwtInCookie({role: profileToChange.role, profileId: profileToChange.id }, res);
        return res.status(200).json({message: 'Profile set successfully', profile: profileToChange});
    }

    async hasProfile(req: Request, res: Response){
        const currentProfile: Profile | undefined = await profileService.getByConditions({where: {id: req.payload.profileId},
            relations: ['user']});
        if (!currentProfile) return res.status(500).json({message: 'Error in request prosessing'});

        const currentUser : User | undefined = currentProfile.user;
        console.log(currentUser);

        // Se comienza la busqueda de algun perfil que cumpla los parametros
        const roleInProfile: AppRole | undefined = fromStringToAppRole(req.params.profile);
        if(!roleInProfile) return res.status(400).json({message: 'Error in request, no such profile in request'});
        const foundprofile = await profileService.getByConditions({where:{user: currentUser, role: roleInProfile}})
        if(!foundprofile) return res.status(500).json({message: 'Error no profile exists'})

        // Si se encuentra algun perfil que figure en la busqueda se devuelve boleano true y termina consulta
        res.status(200).json({response:true})
    }

}

export default new ProfileControler();