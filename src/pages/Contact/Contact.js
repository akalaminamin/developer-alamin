import React from "react";
import Footer from "../../shared/Footer";
import FooterIcon from "../../shared/FooterIcon";

const Contact = () => {
  return (
    <>
      <section
        className="py-10 text-gray-200 font-JosefinSans"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="">
          <h2 className="section-title mb-6 text-gray-50">Contact With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="md:col-span-2 col-span-1 p-5 shadow-lg bg-gray-200 rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.357208500225!2d91.18729911429155!3d23.48363990483273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375478c613dcf50d%3A0x3139278000134a26!2sFokir%20Bazar%20Rd%2C%20Comilla!5e0!3m2!1sen!2sbd!4v1657259496429!5m2!1sen!2sbd"
                width="100%"
                height="300"
                loading="lazy"
              ></iframe>
              <h2 className="font-bold text-2xl py-4 text-gray-800">
                Developer Al Amin
              </h2>
              <p className="pb-3 text-gray-700">
              Here you can contact me with my phone or email address.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Phone:</span> +8801708033091
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-bold">Email:</span>{" "}
                alaminamin3091@gmail.com
              </p>
              <p className="text-sm text-gray-700">Stay Connected</p>
              <div className="flex items-center justify-start">
                <FooterIcon />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 bg-gray-200 p-5 rounded-sm">
              <form action="">
                <div className="flex items-center justify-between mb-4 flex-col md:flex-row gap-3">
                  <div className="w-full flex flex-col">
                    <label htmlFor="name" className="text-gray-600">
                      Your Name
                    </label>
                    <input
                      className="px-4 py-2 rounded-sm focus:outline-primary text-gray-800"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="w-full flex flex-col">
                    <label htmlFor="phone" className="text-gray-600">
                      Phone Number
                    </label>
                    <input
                      className="px-4 py-2 rounded-sm focus:outline-primary text-gray-800"
                      type="tel"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label htmlFor="phone" className="text-gray-600">
                    Your Email
                  </label>
                  <input
                    className="px-4 py-2 rounded-sm focus:outline-primary text-gray-800"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label htmlFor="website" className="text-gray-600">
                    Your Website
                  </label>
                  <input
                    className="px-4 py-2 rounded-sm focus:outline-primary text-gray-800"
                    type="email"
                    name="text"
                  />
                </div>
                <div className="w-full flex flex-col mb-4">
                  <label htmlFor="phone" className="text-gray-600">
                    Your Message
                  </label>
                  <textarea
                    className="px-4 py-2 rounded-sm focus:outline-primary text-gray-800"
                    name="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary px-4 py-2 hover:bg-green-700 transition-all ease-in-out duration-300 rounded-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
