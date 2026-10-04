
function Works() {
  const projects = [
    {
      title: "Vehicle Rental Management System",
      description:
        "A web-based system designed to simplify vehicle rental management, customer records and vehicle information.",
      tech: "PHP • MySQL • HTML • CSS • JavaScript"
    },
    {
      title: "Library Management System",
      description:
        "A simple library management application for managing books, students and book issue records.",
      tech: "PHP • MySQL • Bootstrap"
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website to showcase my skills, projects and experience.",
      tech: "React • Tailwind CSS"
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <p className="text-green-500 font-semibold mb-2">
          MY WORKS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Projects I’ve Built
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          Here are some of the projects I have created while learning
          and practicing web development.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl transition-shadow duration-300"
            >

              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">
                  Project Image
                </span>
              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 leading-7 mb-4">
                  {project.description}
                </p>

                <p className="text-green-600 text-sm font-medium">
                  {project.tech}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Works;

