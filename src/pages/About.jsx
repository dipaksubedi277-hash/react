
function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <p className="text-green-500 font-semibold mb-2">
          ABOUT ME
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          I’m a passionate web developer.
        </h1>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl">
          I enjoy creating clean, simple and user-friendly websites.
          I am interested in modern web technologies and continuously
          improving my development skills through learning and practical
          projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-2">Who I Am</h2>
            <p className="text-gray-600">
              A curious developer who enjoys learning new technologies
              and building useful web applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-2">What I Do</h2>
            <p className="text-gray-600">
              I work with HTML, CSS, JavaScript, React and other web
              technologies to create modern interfaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-2">My Goal</h2>
            <p className="text-gray-600">
              My goal is to become a better developer by learning,
              practicing and building real-world projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

