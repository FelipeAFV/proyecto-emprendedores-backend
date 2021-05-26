import { Request, Response } from "express";
import roleAuth from "middlewares/role-auth";
import { Profile } from "../model/entity/profile";
import { AppCookie } from "../model/enums/app-cookies";
import { AppRole } from "../model/enums/app-role";
import {fromStringToAppRole} from "../utils/profile-utils";
import profileService from "../services/profile-service";
import jwtService from "../services/token/jwt-service";
class ProfileControler { 

    async createProfile(req: Request, res: Response) {

        const {role, email, firstName, lastName} = req.body;
        const currentProfile: Profile | undefined = await profileService.getById(req.payload.profileId!);
        if (!currentProfile) return res.status(500).json({message: 'Error in request prosessing'});

        /**Se comienza con el proceso de crear perfil */
        const appRoleToCreate: AppRole | undefined = fromStringToAppRole(role);
        if(!appRoleToCreate) return res.status(400).json({message: 'Error in request'});
        const profileCreated = await profileService.create({id: 0 ,role: appRoleToCreate, email: email, firstName: firstName, lastName: lastName, user: currentProfile.user});

        /**Se cambian datos en cookie para operar con el nuevo perfil */
        res.clearCookie(AppCookie.JWT);
        jwtService.setJwtInCookie({role: profileCreated.role, profileId: profileCreated.id }, res);
        return res.status(200).json({message: 'Profile created successfully'});
    }

}

export default new ProfileControler();