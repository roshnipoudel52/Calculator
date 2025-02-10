import React from "react";

const teamMembers = [
  { name: "Roshni Paudel", role: "CEO & Founder", image: "/roshni.jpg" },
  { name: "Roshan Ghimire", role: "Architect", image: "/roshan.jpg" },
  { name: "Reshma Paudel", role: "Architect", image: "/reshma.jpg" },
  { name: "Rozan Paudel", role: "Architect", image: "/rojan.jpeg" },
];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-4 mb-8">
        About
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-fill shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-500 mt-4">{member.role}</p>
            <p className="text-gray-600 mt-4">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
