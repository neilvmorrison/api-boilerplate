import { DeepPartial, DeleteResult } from "typeorm";
import { Test } from "../entity/test.entity";
import { CrudService } from "./base.service";

export class TestService {
  service: CrudService<Test>;

  constructor(service) {
    this.service = service;
  }

  async create(payload: Test): Promise<Test> {
    return this.service.create(payload);
  }

  async findAll(): Promise<Test[]> {
    return this.service.findAll();
  }

  async findOne(id: string): Promise<Test> {
    return this.service.findOne({ where: { id } });
  }

  async findManyWhere(where: any): Promise<Test[]> {
    return this.service.findMany({ where });
  }

  async findOneAndUpdate(id, payload: DeepPartial<Test>): Promise<Test> {
    return this.service.findOneAndUpdate(id, payload);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.service.softDelete(id);
  }
}

const crudService = new CrudService(Test);
const testService = new TestService(crudService);

export default testService;
