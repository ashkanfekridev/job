
function TopNavigationComponent() {
  return (
    <div>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="flex flex-row justify-between max-w-screen-xl px-4 py-5 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Sign in</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Sign up</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
           
        </nav>
    </div>
  )
}

export default TopNavigationComponent