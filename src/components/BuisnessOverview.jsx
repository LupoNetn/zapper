import React from "react";

const statGrid = [
  { name: "Campaigns automated", stat: "5,000+" },
  { name: "Emails costs monthly", stat: "2M+" },
  { name: "Loved by companies", stat: "5,000+" },
  { name: "Customer Satisfaction", stat: "98%" },
];

const BuisnessOverview = () => {
  return (
    <section
      id="features"
      className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-left">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
          Empowering businesses through automation
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-800 max-w-3xl">
          We help companies streamline marketing, engage customers, and drive
          growth with intelligent, easy-to-use automation tools.
        </p>
      </div>

      {/* Content and Grid */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Column */}
        <div className="flex-1">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Our mission is simple: to help businesses of all sizes work smarter,
            not harder. We believe marketing automation should be
            <span className="text-gray-950 font-semibold">
              {" "}
              intuitive and accessible to everyone — not just big enterprises
              with big budgets.
            </span>
          </p>

          <button className="btn">Learn more</button>
        </div>

        {/* Stats Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            {statGrid.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-center rounded-md bg-gray-50 border border-gray-200 p-6 sm:p-15 "
              >
                <p className="text-sm sm:text-base text-gray-500">
                  {stat.name}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                  {stat.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div>
        <div className="text-center mt-10">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Automation that delivers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-800 max-w-3xl mx-auto">
            We help companies streamline marketing, engage customers, and drive
            growth with intelligent, easy-to-use automation tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuisnessOverview;
