import { useMutation } from "@tanstack/react-query";
import { userClient } from "@/services/graphqlService/user/userClient";
import { CreateUserInput } from "@/services/graphqlService/user/user.model";

export default function useCreateUser() {
  return useMutation({
    mutationFn: async (request: CreateUserInput) => {
      return await userClient.createUser(request);
    },
  });
}
