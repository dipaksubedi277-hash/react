
function Contact() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <p className="text-green-500 font-semibold mb-2">
          CONTACT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let’s Work Together
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          Have a project idea or want to get in touch?
          Send me a message and I’ll be happy to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-600">
              <p>
                <strong className="text-gray-800">Email:</strong>
                <br />
                dipaksubedi277@gmail.com
              </p>

              <p>
                <strong className="text-gray-800">Phone:</strong>
                <br />
                +977-9867542193
              </p>

              <p>
                <strong className="text-gray-800">Location:</strong>
                <br />
                Nepal
              </p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-2xl shadow-md">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg
              px-4 py-3 mb-4 outline-none
              focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg
              px-4 py-3 mb-4 outline-none
              focus:border-green-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg
              px-4 py-3 mb-4 outline-none
              focus:border-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3
              rounded-lg font-semibold
              hover:bg-green-600 transition-colors duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;

