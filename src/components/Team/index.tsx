import React from "react";
import Image from "next/image";

const TeamMemberDashboard = () => {
  const employeesList = [
    { name: "Hasan Ali", role: "Mason", image: "/TeamMember4.jpg" },
    { name: "Ravi Kumar", role: "Fencing Specialist", image: "/TeamMember5.jpg" },
    { name: "Muhammad Usman", role: "Exterior Painter", image: "/TeamMember3.jpg" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-red-600 p-8 rounded-[1.8rem] text-white font-sans my-10 flex flex-col items-center justify-center pb-36">
        <div className="mb-8 flex flex-col items-center justify-center">
          <span className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full text-xs font-bold animate-bounce">
            TEAM MEMBER
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-center">
            <span className="inline-block transform transition-all duration-500 hover:translate-y-[-5px]">Bridging</span>{" "}
            <span className="inline-block transform transition-all duration-500 hover:translate-y-[-5px]">the</span>{" "}
            <span className="inline-block transform transition-all duration-500 hover:translate-y-[-5px]">Gap</span>
            <br className="hidden sm:block" />
            <span className="inline-block transform transition-all duration-500 hover:translate-y-[-5px]">Dreams</span>{" "}
            <span className="inline-block transform transition-all duration-500 hover:translate-y-[-5px]">Between</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mx-4 sm:mx-8 lg:mx-32 relative bottom-44">
        {employeesList.map((employee, index) => (
          <div
            key={index}
            className="bg-white relative h-96 rounded-xl overflow-hidden text-black w-full sm:w-1/3 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            <Image
              src={employee.image}
              alt={employee.name}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 group-hover:scale-110 object-top"
            />
            <div className="absolute rounded-l-3xl bottom-6 bg-white px-5 py-3 right-0 w-52 transform transition-all duration-500 group-hover:translate-x-[-10px]">
              <h1 className="text-md font-extrabold">{employee.name}</h1>
              <p className="text-sm">{employee.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberDashboard;