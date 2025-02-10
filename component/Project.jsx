import React from "react";

const projects = [
  { title: "Summer House", image: "https://gilliesandmackay.com/wp-content/uploads/2023/03/1_rX2IDnVhhAjTiRHIDWIwur1irZba4yoz6JBxMLiecmeacDa2RlX3iMOc83wnRNP_YzjbmMA7FEMfcOWcWx21TzU1tqiFOUn6qKQCgs1uInH32yMxhLiKOaXiXsp__3QFb5-0CWrq98n4Y9FZzaUrBo.jpg" },
  { title: "Brick House", image: "https://media.istockphoto.com/id/1221023970/photo/small-red-brick-house-with-green-grass.jpg?s=612x612&w=0&k=20&c=pzU3H6V3-_LkKRbUNpexw45-WMfXdVTW5tCI2WE_R-8=" },
  { title: "Renovated", image: "https://www.self-build.co.uk/wp-content/uploads/2020/01/Studio30_1_The-Coach-House_IMG01_Rear-Elevation_Credit-Salt-Productions.jpg" },
  { title: "Barn House", image: "https://onekindesign.com/wp-content/uploads/2020/09/Rustic-Barn-Home-Mountainwood-Homes-00-1-Kindesign.jpg" },
  { title: "Summer House", image: "https://dunsterhouse.co.uk/wp-content/uploads/2023/05/Coronet-Corner-Log-Cabin-25m-x-25m-Closed_xl.jpg" },
  { title: "Brick House", image: "https://images.contentstack.io/v3/assets/bltf589e66bcaecd79c/bltd17872bc551c75b9/65c66807bf8ac4faf7c5b0c7/utah-black-doors-red-brick-home.jpg" },
  { title: "Renovated", image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fhome-projects%2F2020-01%2Fshutterstock_craftsman_house" },
  { title: "Barn House", image: "https://www.beneathmyheart.net/wp-content/uploads/2017/10/modern-barn-exterior-1017.jpg" },
];

export default function Project() {
  return (
    <section id="projects" className="container mx-auto px-8 py-16">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-4 mb-8">
        Projects
      </h3>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            {/* Project Title Overlay */}
            <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 text-sm font-semibold">
              {project.title}
            </div>
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className=" overflow-hidden object-cover w-full h-48 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
