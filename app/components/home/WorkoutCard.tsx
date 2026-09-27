import Image from "next/image";
import Link from "next/link";
import { CiStar, CiTimer } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] transition hover:-translate-y-1 hover:border-[#c2f800]/40">
        
        <div className="overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={360}
            className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-xl font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {workout.equipment}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <CiTimer />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <SlEnergy />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <CiStar />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;