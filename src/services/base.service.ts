import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  FindOptionsWhere,
  DeepPartial,
  DeleteResult,
} from "typeorm";
import { AppDataSource } from "../data-source";

export class CrudService<Entity> {
  private repository: Repository<Entity>;

  constructor(entity) {
    this.repository = AppDataSource.manager.getRepository(entity);
  }

  async create(payload): Promise<Entity> {
    return this.repository.save(payload);
  }

  async findAll(): Promise<Entity[]> {
    return this.repository.find();
  }

  async findBy(query: FindOptionsWhere<Entity>): Promise<Entity[]> {
    return this.repository.findBy(query);
  }

  async findOne(query: FindOneOptions): Promise<Entity> {
    return this.repository.findOne(query);
  }

  async findMany(query: FindManyOptions): Promise<Entity[]> {
    return this.repository.find(query);
  }

  async findOneAndUpdate(
    id: string,
    payload: DeepPartial<Entity>
  ): Promise<Entity> {
    return this.repository.save({ id, ...payload });
  }

  async softDelete(id: string): Promise<DeleteResult> {
    return this.repository.softDelete(id);
  }
}
