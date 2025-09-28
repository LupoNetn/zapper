import { ArrowRightToLine } from "lucide-react";
import React, { useState } from "react";

const statGrid = [
  { name: "Campaigns automated", stat: "5,000+" },
  { name: "Emails costs monthly", stat: "2M+" },
  { name: "Loved by companies", stat: "5,000+" },
  { name: "Customer Satisfaction", stat: "98%" },
];

const services = [
  {
    name: "Smart Email Automation",
    desc: "Automate your email campaigns with intelligent workflows that save time and boost engagement.",
    img: "emailautomation.jpg",
  },
  {
    name: "Multi-Channel Campaign",
    desc: "Manage email, SMS, and social posts from one platform, so your brand stays consistent",
    img: "campaign.jpg",
  },
  {
    name: "Advanced Analytics",
    desc: "Track engagement, conversions, and campaign performance with real-time insights",
    img: "analytics.jpg",
  },
];

// Content to show under each step
const stepContent = {
  design: {
    title: "Design Your Workflows",
    text: "Drag-and-drop builder lets you design automation paths in minutes. Personalize emails, SMS, and social actions without coding.",
  },
  connect: {
    title: "Connect Your Channels",
    text: "Easily integrate your email lists, CRM, and social platforms so everything works together seamlessly.",
  },
  launch: {
    title: "Launch & Optimize",
    text: "Activate your campaigns, monitor performance, and let AI-powered analytics suggest improvements automatically.",
  },
};

const BuisnessOverview = () => {
  const [activeStep, setActiveStep] = useState("design");

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

          <button className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium">
            Learn more
          </button>
        </div>

        {/* Stats Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {statGrid.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-center rounded-md bg-gray-50 border border-gray-200 p-6"
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
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mt-14">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Automation that delivers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We help companies streamline marketing, engage customers, and drive
            growth with intelligent, easy-to-use automation tools.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={service.img}
                alt={service.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {service.desc}
                  </p>
                </div>
                <button className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                  Learn More
                  <ArrowRightToLine className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mt-14">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Get started in minutes - connect your channels, set up automation
            and watch your campaign run on autopilot.
          </p>
        </div>

        {/* Step Buttons */}
        <div className="mt-6">
          <div className="flex overflow-x-auto gap-3 justify-center">
            <button
              onClick={() => setActiveStep("design")}
              className={`border rounded-md px-4 py-2 whitespace-nowrap ${
                activeStep === "design"
                  ? "bg-purple-600 text-white"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              Design Your Workflows
            </button>
            <button
              onClick={() => setActiveStep("connect")}
              className={`border rounded-md px-4 py-2 whitespace-nowrap ${
                activeStep === "connect"
                  ? "bg-purple-600 text-white"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              Connect Your Channels
            </button>
            <button
              onClick={() => setActiveStep("launch")}
              className={`border rounded-md px-4 py-2 whitespace-nowrap ${
                activeStep === "launch"
                  ? "bg-purple-600 text-white"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              Launch & Optimize
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-8">
          {/* Illustration Placeholder */}
          <div className="w-full max-w-md h-64 rounded-lg shadow-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
            {stepContent[activeStep].title.charAt(0)}
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {stepContent[activeStep].title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {stepContent[activeStep].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuisnessOverview;
