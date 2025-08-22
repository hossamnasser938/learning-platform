import { Instructor } from "../models/instructor/Instructor";

export interface IInstructorRepo {
  getById(id: string): Promise<Instructor | null>;
  getAll(): Promise<Instructor[]>;
  create(instructor: Instructor): Promise<void>;
  update(instructor: Instructor): Promise<void>;
  delete(id: string): Promise<void>;
}
