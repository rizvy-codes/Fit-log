import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="fit-container scroll-mt-24 py-14"
    >
      <div>
        <h2 className="text-4xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-lg text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;