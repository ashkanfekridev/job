function TopNavigationDesktop() {
  return (
    <div>
      <nav className="text-lg">
        <div className="flex flex-row px-4 py-5 mx-auto ">
          <div className="flex items-center ">
            <ul className="flex flex-row font-medium mt-0 gap-4 ">
              <li className="">
                <a
                  href="#"
                  className="top-nav-item text-black  hover:underline"
                  aria-current="page"
                >
                  Logo😊
                </a>
              </li>
              <li className=" m-0">
                <a
                  href="#"
                  className="top-nav-item text-black  hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="top-nav-item text-black  hover:underline"
                >
                  Jobs
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="top-nav-item text-black  hover:underline"
                >
                  Team
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="top-nav-item text-black  hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0   ">
                        <li className="">
                            <a href="#" className="text-black" aria-current="page">Sign in</a>
                        </li>
                        <li className="">
                            <button >
                            <a href="#" className="text-black  ">Sign up</a>
                            </button>
                        </li>
                    
                    </ul>
                </div> */}
        </div>
      </nav>
    </div>
  );
}

export default TopNavigationDesktop;
