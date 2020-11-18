import React, { Fragment, useState } from 'react'
import Drawer from '../../components/Drawer'

const School = () => {
    const [showAddScholDrawer, setShowAddScholDrawer] = useState(false)
    return (
        <Fragment>

            <div class="max-w-6xl mx-auto px-4 sm:px-6">

                <div>
                    <div className="flex justify-between items-center">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Schools
                    </h3>
                        <span class="inline-flex rounded-md shadow-sm">
                            <button onClick={() => setShowAddScholDrawer(true)} type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                Add School
                        </button>
                        </span>
                    </div>
                    <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white overflow-hidden shadow rounded-lg">
                            <div class="px-4 py-5 sm:p-6">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        {/* <!-- Heroicon name: users --> */}
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                Total Subscribers
              </dt>
                                            <dd class="flex items-baseline">
                                                <div class="text-2xl leading-8 font-semibold text-gray-900">
                                                    71,897
                </div>
                                                <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600">
                                                    <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span class="sr-only">
                                                        Increased by
                  </span>
                  122
                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-4 sm:px-6">
                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        View all
          </a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white overflow-hidden shadow rounded-lg">
                            <div class="px-4 py-5 sm:p-6">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        {/* <!-- Heroicon name: mail-open --> */}
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                        </svg>
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                Avg. Open Rate.
              </dt>
                                            <dd class="flex items-baseline">
                                                <div class="text-2xl leading-8 font-semibold text-gray-900">
                                                    58.16%
                </div>
                                                <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-green-600">
                                                    <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span class="sr-only">
                                                        Increased by
                  </span>
                  5.4%
                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-4 sm:px-6">
                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        View all
          </a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white overflow-hidden shadow rounded-lg">
                            <div class="px-4 py-5 sm:p-6">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                        {/* <!-- Heroicon name: cursor-click --> */}
                                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                    <div class="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                Avg. Click Rate
              </dt>
                                            <dd class="flex items-baseline">
                                                <div class="text-2xl leading-8 font-semibold text-gray-900">
                                                    24.57
                </div>
                                                <div class="ml-2 flex items-baseline text-sm leading-5 font-semibold text-red-600">
                                                    <svg class="self-center flex-shrink-0 h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span class="sr-only">
                                                        Decreased by
                  </span>
                  3.2%
                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-4 sm:px-6">
                                <div class="text-sm leading-5">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        View all
          </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col mt-8">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                        </th>
                                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                        </th>
                                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                        </th>
                                            <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Role
                                        </th>
                                            <th class="px-6 py-3 bg-gray-50"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                                Jane Cooper
                                        </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                Regional Paradigm Technician
                                        </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                jane.cooper@example.com
                                        </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                                Admin
                                        </td>
                                            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>

                                        {/* <!-- More rows... --> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Drawer show={showAddScholDrawer} close={setShowAddScholDrawer}>

                <div class="relative flex-1 py-6 px-4 sm:px-6">
                    {/* <!-- Replace with your content --> */}
                    <div class="absolute inset-0 py-6 px-4 sm:px-6">
                        <div class="h-full border-2 border-dashed border-gray-200"></div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </Drawer>

        </Fragment>
    )
}

export default School