import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Test } from "./entity/test.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DM_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**.entity.ts"],
  migrations: [],
  subscribers: [],
});
