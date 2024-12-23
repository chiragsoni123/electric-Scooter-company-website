import React from 'react';

function Contact() {
  return (
    <div className="p-5">
      <h2 className="text-5xl font-bold mb-5 text-center">Contact Us</h2>
      <br />
      <hr />
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-5">
          <img 
            src="https://toxmoscooters.com/wp-content/uploads/2024/02/Webside.jpg" 
            alt="Contact" 
            className="w-full h-auto rounded shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 p-5">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input id="firstName" type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input id="lastName" type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input id="phone" type="text" className="mt-1 p-2 border border-gray-300 rounded w-full"required />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business/Organization</label>
              <input id="business" type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Your Address</label>
              <input id="address" type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" required/>
            </div>
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-gray-700">Request</label>
              <textarea id="request" className="mt-1 p-2 border border-gray-300 rounded w-full" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#16611d] text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;