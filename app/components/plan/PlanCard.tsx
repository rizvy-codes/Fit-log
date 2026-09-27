"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import {
  CiStar,
  CiTimer,
} from "react-icons/ci";

import { SlEnergy } from "react-icons/sl";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout";
import { WorkoutContext } from "@/context/WorkoutContext";

interface PlanCardProps {
  workout: Workout;
  isPlan: boolean;
}

const PlanCard = ({
  workout,
  isPlan,
}: PlanCardProps) => {
  const {
    plan,
    setPlan,
    saved,
    setSaved,
    completedIds,
    setCompletedIds,
  } = useContext(WorkoutContext);

  const isCompleted = completedIds.includes(
    workout.id,
  );

  const handleRemove = () => {
    if (isPlan) {
      setPlan((currentPlan) =>
        currentPlan.filter(
          (item) => item.id !== workout.id,
        ),
      );

      toast.success(
        `"${workout.name}" removed from today's plan`,
      );
    } else {
      setSaved((currentSaved) =>
        currentSaved.filter(
          (item) => item.id !== workout.id,
        ),
      );

      toast.success(
        `"${workout.name}" removed from saved`,
      );
    }
  };

  const handleDone = () => {
    if (!completedIds.includes(workout.id)) {
      setCompletedIds((currentIds) => [
        ...currentIds,
        workout.id,
      ]);
    }

    toast.success(
      `"${workout.name}" marked as done`,
    );
  };

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#15171d] p-4 md:flex-row md:items-center ${
        isCompleted ? "opacity-70" : ""
      }`}
    >
      <Image
        src={workout.image}
        alt={workout.name}
        width={140}
        height={100}
        className="h-44 w-full rounded-xl object-cover md:h-24 md:w-36"
      />

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold uppercase text-white">
            {workout.name}
          </h3>

          {isCompleted && (
            <span className="badge border-0 bg-[#c2f800] text-black">
              DONE
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
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

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm btn-outline border-white/20 text-white"
        >
          View Details
        </Link>

        {isPlan && (
          <button
            onClick={handleDone}
            disabled={isCompleted}
            className="btn btn-sm border-0 bg-[#c2f800] text-black disabled:bg-gray-700 disabled:text-gray-400"
          >
            <FaCheck />
            {isCompleted ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          className="btn btn-sm btn-ghost text-xl text-gray-500 hover:text-white"
          aria-label="Remove workout"
        >
          <MdCancel />
        </button>
      </div>
    </article>
  );
};

export default PlanCard;