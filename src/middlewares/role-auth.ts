import { Request, Response, NextFunction } from "express";

class RoleAuth {

    checkRole(userRoles: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            const currentRole = req.payload.role;
            if (!userRoles.includes(currentRole)) res.status(401).json({message: 'Unauthorized user'});
            next();
            
        }
    }
}

export default new RoleAuth();