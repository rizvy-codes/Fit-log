"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import PlanCard from "./PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";

type PlanTab = "plan" | "saved";

const MyPlan = () => {
  const { plan, saved } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<PlanTab>("plan");

  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const activeWorkouts =
    activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-[#c2f800]">
            YOUR WORKOUTS
          </p>

          <h1 className="text-3xl font-black uppercase md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Keep track of your planned workouts and saved exercises
            in one place.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-5">
            <p className="text-sm text-gray-500">EXERCISES</p>

            <h2 className="mt-2 text-3xl font-black text-[#c2f800]">
              {totalExercises}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-5">
            <p className="text-sm text-gray-500">MINUTES</p>

            <h2 className="mt-2 text-3xl font-black text-[#c2f800]">
              {totalMinutes}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#15171d] p-5">
            <p className="text-sm text-gray-500">CALORIES</p>

            <h2 className="mt-2 text-3xl font-black text-[#c2f800]">
              {totalCalories}
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 text-sm font-bold uppercase ${
              activeTab === "plan"
                ? "border-b-2 border-[#c2f800] text-[#c2f800]"
                : "text-gray-500"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 text-sm font-bold uppercase ${
              activeTab === "saved"
                ? "border-b-2 border-[#c2f800] text-[#c2f800]"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Section title */}
        <div className="mb-5">
          <h2 className="text-xl font-bold uppercase">
            {activeTab === "plan"
              ? "Today's Plan"
              : "Saved Workouts"}
          </h2>
        </div>

        {/* Workout list */}
        {activeWorkouts.length > 0 ? (
          <div className="space-y-4">
            {activeWorkouts.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                isPlan={activeTab === "plan"}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-2xl border border-white/10 bg-[#15171d] px-6 py-16 text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#c2f800]">
              NOTHING HERE YET
            </p>

            <h3 className="text-2xl font-black uppercase">
              {activeTab === "plan"
                ? "Your plan is empty"
                : "No saved workouts"}
            </h3>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              {activeTab === "plan"
                ? "Browse the workout library and add exercises to your today's plan."
                : "Save workouts for later and they will appear here."}
            </p>

            <Link
              href="/#library"
              className="btn mt-6 border-0 bg-[#c2f800] text-black hover:bg-[#d5ff4d]"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;