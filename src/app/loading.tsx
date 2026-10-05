const Loading = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-4"
    >
      <div className="relative size-14">
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-4 border-red-100" />
        {/* Spinning arc */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-700" />
      </div>

      <p className="text-sm font-medium text-gray-600">লোড হচ্ছে...</p>
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default Loading;
