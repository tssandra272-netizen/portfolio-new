const stats = [
  { number: "5+", label: "Experiences" },
  { number: "20+", label: "Projects done" },
  { number: "80+", label: "Happy Clients" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-md mt-12 bg-[#FFF3E8] p-5 rounded-lg">

      {stats.map((item) => (
        <div
          key={item.label}
          className="border-r border-orange-200 last:border-none pl-2"
        >
          <h3 className="text-[#F97316] text-xl font-bold">
            {item.number}
          </h3>

          <p className="text-gray-600 text-xs mt-2">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Stats;