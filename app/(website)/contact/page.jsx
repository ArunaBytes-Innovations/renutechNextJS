import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#219de5] to-[#09172d]">
      <div className="max-w-md w-full bg-white bg-opacity-25 shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form>
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer my-4 w-80 bg-inherit h-8 focus:outline-none  placeholder-transparent border-b-2 "
              placeholder="name"
              required
            />
            <label
              htmlFor="name"
              className=" absolute font-semibold  left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="college"
              className="peer my-4 w-80 bg-inherit h-8 focus:outline-none  placeholder-transparent border-b-2 "
              placeholder="college name"
              required
            />
            <label
              htmlFor="college"
              className=" absolute font-semibold  left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              College Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="user"
              className="peer my-4 bg-inherit w-80 h-8 focus:outline-none  placeholder-transparent border-b-2 "
              placeholder="Email"
              required
            />
            <label
              htmlFor="user"
              className="font-semibold absolute left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-black font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
