import Hero from "@/app/components/home/Hero";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="fit-container py-14"
      >
        <h2 className="text-4xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-xl text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>

        <p className="mt-8 text-gray-400">
          {workouts.length} workouts available.
        </p>
      </section>
    </main>
  );
}
}