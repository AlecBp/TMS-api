import { ApolloError } from "apollo-server-express";

export class ObjectDoesNotExistError extends ApolloError {
  constructor() {
    super("Object with the given ID does not exist", "OBJECT_DOES_NOT_EXIST");
  }
}
