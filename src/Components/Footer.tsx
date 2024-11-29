import React, { useState } from "react";

const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFooter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Footer container */}
      <footer
        className={`fixed bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 text-white ${
          isExpanded ? "h-[24%]" : "h-12"
        }`}
        onClick={toggleFooter}
      >
        {/* Footer top bar */}
        <div className="h-12 flex items-center justify-center cursor-pointer">
          <p className="text-center text-sm">
            {isExpanded ? "Close" : "Click for more info"}
          </p>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="flex justify-around items-center h-full p-6">
         
            
            {/* Important Links */}
            <div>
              <h4 className="text-lg font-bold mb-1">Important Links</h4>
              <ul className="list-none space-y-1 ">
                <li>
                  <a href="#" className="hover:underline ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div >
              <h4 className="text-lg text-center font-bold ">Contact</h4>
              <p className="flex justify-center">Email: contact@andarbahar.com</p>
              <p className="flex justify-center">Phone: +1-969-969-969</p>
              <p className="flex justify-center">Owner: Scam Skanda</p>
              <p className="flex justify-center">Co-owner: Pablo</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <ul className="list-none space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
       
      
      </footer>
    </div>
  );
};

export default Footer;
