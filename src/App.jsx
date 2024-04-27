import { useState } from 'react'
import './App.css'
import Logo from './assets/pages/Logo.png'
import { Link,Route, Routes } from 'react-router-dom'
import About from './About'
import Location from './assets/pages/Location'
import Menu from './Menu'
import Home from './Home'
import Reservation from './assets/pages/Reservation'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Book a Seat', href: '#book' },
  { name: 'Location', href: '#location' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div>
    <header className="bg-white z-50 absolute">
      <nav className="top mx-auto flex fixed top-0  bg-white  items-center justify-between nav px-10 max-sm:px-0" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="  logo" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

        {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-xl font-bold text-gray-700 leading-6 nav-text ">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button  className="text-xl font-bold leading-6 px-3 py-2 rounded-md text-white border border-gray-700 bg-gray-700">
            Order Now
          </button>
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}  
                    className="-mx-3 block  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Order Now 
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

    <section id='home'>
      {<Home/>}
    </section>

    <section id='about'>
      {<About/>}
    </section>

    <section id='menu'>
      {<Menu/>}
    </section> 

    <section id='book'>
      <Reservation/>
    </section>

    <section id='location'>
      {<Location/>}
    </section>
    <section id='login'>
      
    </section>
    </div>
  )
}
