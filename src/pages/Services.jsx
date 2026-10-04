
function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern web technologies."
    },
    {
      title: "React Development",
      description:
        "Creating interactive and reusable user interfaces using React components."
    },
    {
      title: "UI Design",
      description:
        "Designing clean, simple and attractive interfaces that are easy to use."
    },
    {
      title: "Responsive Design",
      description:
        "Making websites work smoothly on desktop, tablet and mobile devices."
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-green-500 font-semibold mb-2">
          SERVICES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What I Can Do
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          I provide simple and practical web development solutions
          focused on usability, performance and clean design.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center
                bg-green-100 text-green-600 rounded-full mb-5">
                {index + 1}
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;

