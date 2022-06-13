import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/base.entity";

@Entity()
export class Test extends BaseEntity {
  @Column()
  test: string;
}
