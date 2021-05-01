import { DeleteResult, EntityTarget, getRepository } from "typeorm";

export class GenericService<T> {

    entity: EntityTarget<T>;

    constructor(entity: EntityTarget<T>) {
        this.entity = entity;
    }
    
    async getAll() {
        return getRepository(this.entity).find();
    }

    async getById( entityId: number) {
        return getRepository(this.entity).findOne(entityId);
    }

    async getByConditions(conditions: any) {
        return getRepository(this.entity).findOne(conditions);
    }

    async deleteById(entityId: number) {
        const deleteResult: DeleteResult = await getRepository(this.entity).delete(entityId);
        return Promise.resolve(deleteResult.affected);
    }

    async update(entityId: number, entity: T) {
        return getRepository(this.entity).update(entityId, entity);
    }

    async create(entity: T) {
        return getRepository(this.entity).save(entity);
    }
}