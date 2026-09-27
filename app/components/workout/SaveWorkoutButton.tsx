"use client";

import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout";
import { WorkoutContext } from "@/context/WorkoutContext";

interface SaveWorkoutButtonProps {
  workout: Workout;
}

const SaveWorkoutButton = ({
  workout,
}: SaveWorkoutButtonProps) => {
  const { saved, setSaved } = useContext(WorkoutContext);

  const alreadySaved = saved.some(
    (item) => item.id === workout.id,
  );

  const handleSave = () => {
    if (alreadySaved) {
      toast.info(`"${workout.name}" is already saved`);
      return;
    }

    setSaved((currentSaved) => [
      ...currentSaved,
      workout,
    ]);

    toast.success(`"${workout.name}" saved for later`);
  };

  return (
    <button
      onClick={handleSave}
      disabled={alreadySaved}
      className="btn btn-outline border-white/20 text-white disabled:border-gray-700 disabled:text-gray-600"
    >
      <FaRegBookmark />

      {alreadySaved
        ? "Saved"
        : "Save for later"}
    </button>
  );
};

export default SaveWorkoutButton;