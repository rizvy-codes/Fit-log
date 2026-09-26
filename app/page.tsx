import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="fit-container py-10">
      <h1 className="text-4xl font-bold text-white">
        FitLog
      </h1>

      <p className="mt-3 text-gray-400">
        Total workouts: {workouts.length}
      </p>
    </main>
  );
}