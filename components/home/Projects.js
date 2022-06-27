import React from "react";

const items = [
  {
    id: 1,
    title: "16",
    subtitle: "Happy clients",
    descritpion: "Brief description about happy clients",
  },
  {
    id: 2,
    title: "02+",
    subtitle: "Years of Experience",
    descritpion: "Brief description about experience",
  },
  {
    id: 3,
    title: "48%",
    subtitle: "Cost savings",
    descritpion: "Brief description about happy clients",
  },
  {
    id: 4,
    title: "1k",
    subtitle: "Files Protected",
    descritpion: "Brief description about happy clients",
  },
];

function Projects() {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto pt-8 pb-24">
        <div className="grid grid-cols-4 justify-items-center gap-8">
          {items.map((item) => {
            return (
              <div key={item.id} className="py-8">
                {/* figure */}
                <h2 className="font-bold text-5xl text-purple-900">
                  {item.title}
                </h2>
                <h4 className="font-bold text-gray-700 text-md py-2">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600">{item.descritpion} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
