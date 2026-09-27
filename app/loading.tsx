const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#c2f800]" />

        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
          Loading Workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;