import { useMutation } from "@tanstack/react-query";

import { apiClient } from "./apiClient";

interface SignInData {
  email: string;
  password: string;
}

export function useSignIn() {
  return useMutation({
    mutationFn: async (data: SignInData) => {
      const response = await apiClient.post("users/signin", data);
      return response.data;
    },
  });
}
