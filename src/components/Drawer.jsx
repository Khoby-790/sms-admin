import React from 'react'
import ReactDom from 'react-dom'
import { Transition } from '@headlessui/react'

const Drawer = ({ show, children, title, description, close }) => {
    return ReactDom.createPortal(
        <Transition
            show={show}
            appear={true}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
        >
            <div class="fixed z-10 inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                        <div class="w-screen max-w-xl">
                            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                <header class="space-y-1 py-6 px-4 bg-indigo-700 sm:px-6">
                                    <div class="flex items-center justify-between space-x-3">
                                        <h2 class="text-lg leading-7 font-medium text-white">
                                            {title}
                                        </h2>
                                        <div class="h-7 flex items-center">
                                            <button onClick={() => close(false)} aria-label="Close panel" class="text-indigo-200 hover:text-white transition ease-in-out duration-150">
                                                {/* <!-- Heroicon name: x --> */}
                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-sm leading-5 text-indigo-300">
                                            {description}
                                        </p>
                                    </div>
                                </header>

                                {children}
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </Transition>
        , document.getElementById("drawer"))
}

export default Drawer
