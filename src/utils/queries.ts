import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Example query hook
export const useExampleData = () => {
  return useQuery({
    queryKey: ["exampleData"],
    queryFn: async () => {
      // Replace with your actual API call
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};

// Example mutation hook
export const useExampleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newData: any) => {
      // Replace with your actual API call
      const response = await fetch("https://api.example.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch queries that depend on this data
      queryClient.invalidateQueries({ queryKey: ["exampleData"] });
    },
  });
};
