import React from 'react';
import { useTheme } from './ThemeContext'; // Adjust the path as needed

function CallToAction() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`relative overflow-hidden ${isDarkMode ? 'bg-neutral-800' : 'bg-white'} rounded-2xl m-2 mt-8 mb-8 shadow-md`}>
      <div className={`px-16 py-8 sm:px-8 lg:px-16 lg:py-14 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <div className={`md:flex md:items-center md:space-x-12 lg:space-x-24`}>
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-12 xl:gap-x-24">
            <div>
              <ul className="space-y-3 text-base font-medium font-pj">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited updates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Bigger app size
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  More version Storage
                </li>
              </ul>
            </div>
            <div className='ml-6'>
              <ul className="space-y-3 text-base font-medium font-pj">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom domain
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Special API access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Bulk upload
                </li>
              </ul>
            </div>
          </div>
          <div class="block md:hidden pl-8 lg:block">
                <div class="hidden lg:block">
                    <svg class="w-4 h-auto text-gray-600" viewBox="0 0 16 123" fill="none" stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 11)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 46)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 81)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 116)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 18)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 53)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 88)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 123)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 25)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 60)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 95)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 32)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 67)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 102)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 39)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 74)"></line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5"
                            transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 109)"></line>
                    </svg>
                </div>
                <div class="block mt-10 md:hidden">
                    <svg class="w-auto h-4 text-gray-600" viewBox="0 0 172 16" fill="none" stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)">
                        </line>
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)">
                        </line>
                    </svg>
                </div>
            </div>
          <div className="mt-10 ml-10 pl-40 md:mt-0 flex justify-center">
            <a
              title="Get quote now"
              className={`inline-flex items-center justify-center px-9 py-3.5 mt-5 text-base font-bold ${isDarkMode ? 'text-black bg-white' : 'text-white bg-gray-900'} transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white font-pj hover:bg-opacity-90 rounded-xl`}
              href="#support"
            >
              Get quote now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
