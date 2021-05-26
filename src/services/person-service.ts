import { Profile } from "model/entity/profile";
import { AppRole } from "model/enums/app-role";
import { Person } from "model/person";

export interface PersonService {

    saveDefault: (associatedProfile: Profile) => Promise<Person>;
}