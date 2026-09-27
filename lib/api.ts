import { Workout } from "@/types/workout";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

export const getWorkoutById = async (
  id: string,
): Promise<Workout | null> => {
  const workouts = await getWorkouts();

  const workout = workouts.find(
    (item) => item.id === Number(id),
  );

  return workout ?? null;
};