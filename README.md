# FitLog

FitLog is a modern workout library web application built with Next.js and TypeScript. It allows users to browse workouts, view detailed exercise information, create a daily workout plan, and save workouts for later.

## Live Website

Add your deployed website link here.

## GitHub Repository

Add your GitHub repository link here.

## Technologies Used

- Next.js
- TypeScript
- React
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- REST API
- LocalStorage

## Features

### 1. Workout Library

Users can browse all available workouts from the FitLog API.

### 2. Workout Details

Each workout has a dedicated details page containing:

- Exercise image
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions

### 3. Today's Plan

Users can add workouts to their daily plan and see live statistics for:

- Exercises
- Minutes
- Calories

The daily plan supports a maximum of five workouts.

### 4. Saved Workouts

Users can save workouts for later and manage them from the Saved tab.

### 5. Sorting

Workouts on the My Plan page can be sorted by:

- Duration
- Calories
- Rating

### 6. Mark as Done

Planned workouts can be marked as completed with a toast notification.

### 7. LocalStorage

Today's Plan, Saved workouts, and completed workout status are stored in localStorage so the data remains after a page reload.

### 8. Responsive Design

The application works across:

- Mobile
- Tablet
- Desktop

## Project Structure

```text
app/
├── components/
│   ├── home/
│   ├── plan/
│   ├── shared/
│   └── workout/
│
├── my-plan/
├── workout/
├── loading.tsx
├── not-found.tsx
├── layout.tsx
├── page.tsx
└── globals.css

context/
└── WorkoutContext.tsx

lib/
└── api.ts

types/
└── workout.ts