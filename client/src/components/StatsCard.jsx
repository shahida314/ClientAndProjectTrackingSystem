const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 w-full overflow-hidden">
      <h2 className="text-gray-500 text-sm sm:text-base truncate">
        {title}
      </h2>
      <p className="text-xl sm:text-2xl font-bold break-words">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;