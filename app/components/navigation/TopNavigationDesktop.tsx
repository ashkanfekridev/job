import React from 'react';

const TopNavigationDesktop: React.FC = () => {
  return (
    <div>
      <nav className="text-md md:text-lg  ">
        <div className="flex flex-row justify-between px-4 py-5 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="text-black hover:underline" aria-current="page">
                  Logo😊
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  Team
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-black hover:underline">
                  Support
                </a>
              </li> */}
            </ul>
          </div>
          <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse">
                  <li>
                      <a href="#" className="text-black" aria-current="page">Sign in</a>
                  </li>
                  <li>
                      <button>
                      <a href="#" className="text-black">Sign up</a>
                      </button>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigationDesktop;
