import { Entity } from "typeorm";
import { AppDataSource } from "../data-source";

export interface ICrudService {
  create(payload: any): Promise<any>;
}

export class CrudService {
  repository: any;

  constructor(entity) {
    this.repository = AppDataSource.manager.getRepository(entity);
  }

  async create(payload) {
    return this.repository.save(payload);
  }
}
