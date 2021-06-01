import { Request, Response } from "express";
import jwtService from "../services/token/jwt-service";
import profileService from "../services/profile-service";
import personserviceFactory from "../model/factory/personservice-factory";
import storePermissionService from "../services/permission/store-permission";
import { PersonService }  from "../services/person-service";
import { Profile } from "model/entity/profile";
class AuthorizationController {

    async isStoreOwner(req: Request, res: Response) {

        const { storeName } = req.body.storeName;

        const profileId = jwtService.getJwtPayloadInCookie(req)?.profileId;
        if (!profileId) return res.status(500).json({message: 'error'});

        const profile: Profile | undefined = await profileService.getById(profileId);
        if (!profile) return res.status(500).json({message: 'error'});

        const personService: PersonService = personserviceFactory.createPersonServiceFromRole(profile.role);
        const storeManager = await personService.getPerson(profile);

        const isStoreOwner = storePermissionService.isStoreOwner(storeManager?.id, storeName);

        isStoreOwner ?  res.status(200).json({message: 'Authorized: Is store owner'}) : 
         res.status(401).json({message: 'Unauthorized: Is not store owner'});

    }
}

export default new AuthorizationController();