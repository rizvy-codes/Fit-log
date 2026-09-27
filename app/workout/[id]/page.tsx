import Image from "next/image";
import { notFound } from "next/navigation";
import { CiStar, CiTimer } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";

import { getWorkoutById } from "@/lib/api";
import AddToPlanButton from "@/app/components/workout/AddToPlanButton";
import SaveWorkoutButton from "@/app/components/workout/SaveWorkoutButton";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsProps) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="fit-container py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        
        {/* Image */}
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={700}
            height={700}
            className="h-full max-h-[600px] w-full rounded-2xl object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-black uppercase text-white md:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-400 md:text-base">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c2f800] px-4 py-2 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#15171d]">
            
            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">EQUIPMENT</span>
              <span className="text-right text-sm text-white">
                {workout.equipment}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">DIFFICULTY</span>
              <span className="text-sm text-white">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">SETS</span>
              <span className="text-sm text-white">
                {workout.sets}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">REPS</span>
              <span className="text-sm text-white">
                {workout.reps}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">DURATION</span>
              <span className="flex items-center gap-1 text-sm text-white">
                <CiTimer />
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 px-5 py-4">
              <span className="text-sm text-gray-500">CALORIES</span>
              <span className="flex items-center gap-1 text-sm text-white">
                <SlEnergy />
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-5 py-4">
              <span className="text-sm text-gray-500">RATING</span>
              <span className="flex items-center gap-1 text-sm text-white">
                <CiStar />
                {workout.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase text-white">
              INSTRUCTIONS
            </h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 text-sm leading-6 text-gray-400"
                >
                  <span className="font-bold text-[#c2f800]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToPlanButton workout={workout} />
            <SaveWorkoutButton workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;