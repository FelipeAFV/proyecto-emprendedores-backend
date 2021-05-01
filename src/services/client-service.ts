import { Client } from "../model/entity/client";
import { GenericService } from "./generic-service";

class ClientService extends GenericService<Client> {

    constructor() {
        super(Client);
    }
}

export default new ClientService();