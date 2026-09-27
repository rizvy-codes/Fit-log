import { Workout } from "@/types/workout";

const API_URL =
  "https://api.api-store.workers.dev/api/fitlog";

export const getWorkouts =
  async (): Promise<Workout[]> => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(
          "Unable to load workout data",
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "Workout API error:",
        error,
      );

      throw new Error(
        "Workout data could not be loaded",
      );
    }
  };

export const getWorkoutById =
  async (
    id: string,
  ): Promise<Workout | null> => {
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
      );

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      if (data?.error) {
        return null;
      }

      return data;
    } catch (error) {
      console.error(
        "Workout details API error:",
        error,
      );

      return null;
    }
  };