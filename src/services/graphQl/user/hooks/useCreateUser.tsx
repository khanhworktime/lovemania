import { useMutation } from "@tanstack/react-query";
import { userClient } from "../userClient";
import { CreateUserInput } from "../user.model";

export default function useCreateUser() {
  return useMutation({
    mutationFn: async (request: CreateUserInput) => {
      return await userClient.createUser(request);
    },
  });
}
