"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];
  completedIds: number[];

  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
  setCompletedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const WorkoutContext =
  createContext<WorkoutContextType>({
    plan: [],
    saved: [],
    completedIds: [],
    setPlan: () => {},
    setSaved: () => {},
    setCompletedIds: () => {},
  });

const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted = localStorage.getItem(
      "fitlog-completed",
    );

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompletedIds(JSON.parse(storedCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completedIds),
    );
  }, [completedIds]);

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        completedIds,
        setPlan,
        setSaved,
        setCompletedIds,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;