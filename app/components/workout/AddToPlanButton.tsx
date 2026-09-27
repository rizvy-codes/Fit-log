"use client";

import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout";
import { WorkoutContext } from "@/context/WorkoutContext";

interface AddToPlanButtonProps {
  workout: Workout;
}

const AddToPlanButton = ({
  workout,
}: AddToPlanButtonProps) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const alreadyAdded = plan.some(
    (item) => item.id === workout.id,
  );

  const planIsFull = plan.length >= 5;

  const handleAdd = () => {
    if (alreadyAdded) {
      toast.warning(`"${workout.name}" is already in today's plan`);
      return;
    }

    if (planIsFull) {
      toast.info("Today's plan can contain maximum 5 workouts");
      return;
    }

    setPlan((currentPlan) => [
      ...currentPlan,
      workout,
    ]);

    toast.success(`"${workout.name}" added to today's plan`);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={alreadyAdded || planIsFull}
      className="btn border-0 bg-[#c2f800] text-black hover:bg-[#b6e800] disabled:bg-gray-700 disabled:text-gray-400"
    >
      <FaPlus />

      {alreadyAdded
        ? "Already Added"
        : planIsFull
          ? "Plan Full"
          : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;