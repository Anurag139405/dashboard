import React from 'react';
import { useTheme } from '../component/ui/ThemeContext';

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`navbar ${isDarkMode ? 'bg-base-100 dark:bg-neutral-800' : 'bg-white text-black'}`}>
            <div className="flex-1">
                <a className={`btn btn-ghost text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>daisyUI</a>
            </div>
            <div className="flex-none">
                <label className="flex items-center">
                    <input 
                        type="checkbox" 
                        className="toggle toggle-md" 
                        checked={isDarkMode} 
                        onChange={toggleTheme} // Call toggleTheme directly
                    />
                </label>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className={`card card-compact dropdown-content  ${isDarkMode ? 'bg-base-100' : 'bg-white'} z-[1] mt-3 w-52 shadow`}>
                        <div className="card-body">
                            <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>8 Items</span>
                            <span className={`text-info ${isDarkMode ? 'text-white' : 'text-black'}`}>Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle avatar ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content ${isDarkMode ? 'bg-base-100' : 'bg-white'} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        <li>
                            <a className={`justify-between ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a className={isDarkMode ? 'text-white' : 'text-black'}>Settings</a></li>
                        <li><a className={isDarkMode ? 'text-white' : 'text-black'}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
