import { Test } from "../entity/test.entity";
import { CrudService, ICrudService } from "./base.service";

export class TestService {
  service: ICrudService;

  constructor(service) {
    this.service = service;
  }

  async create(payload: any) {
    return this.service.create(payload);
  }
}

const crudService = new CrudService(Test);
const testService = new TestService(crudService);

export default testService;
