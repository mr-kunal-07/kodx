export default function Achievements() {
    const stats = [
        { number: "150+", label: "Projects Delivered" },
        { number: "50+", label: "International Clients" },
        { number: "1+", label: "Years in Business" },
        { number: "1", label: "Industry Awards Won" },
    ];

    return (
        <section className="w-full py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                    Achievements
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 rounded-xl 
              border border-white/20 backdrop-blur-xl 
              bg-gradient-to-br from-white/10 to-white/5 
              shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
              transition duration-300"
                        >
                            <span className="text-3xl sm:text-4xl font-bold text-white mb-1">
                                {stat.number}
                            </span>
                            <span className="text-gray-200 text-xs sm:text-sm text-center">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
