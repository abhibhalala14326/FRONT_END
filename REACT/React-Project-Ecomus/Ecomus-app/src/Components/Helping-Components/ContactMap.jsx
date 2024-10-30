import React from "react";

const ContactMap = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full lg:full h-[100vh] lg:h-3/4 rounded-lg overflow-hidden shadow-lg">
        <div className="relative text-right w-full h-[100vh]">
          <div className="overflow-hidden h-[100vh] w-full">
            <iframe
              className="w-full h-[100vh]"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Tower of London&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
