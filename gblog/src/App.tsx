// import { Disclosure } from '@headlessui/react'
import './App.css'
import Login from './components/Login';
import Navbar from "./components/Navbar";
// import Navbar from './Navbar'

function App() {

  return (
    <>
    {/* <Login /> */}
      <Navbar/>
      <Login />
      {/* <Disclosure>
        <Disclosure.Button className="py-2">
          Is team pricing available?
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          Yes! You can purchase a licence that you can share with your entire team.
        </Disclosure.Panel>
      </Disclosure> */}
    </>
  )
}

export default App
