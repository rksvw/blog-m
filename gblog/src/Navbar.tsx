import { Fragment } from "react"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: "ABOUT", href: "#", current: true},
    { name: "GAMES", href: "#", current: false},
    { name: "BLOG", href: "#", current: false},
    { name: "STUDIO", href: "#", current: false},
]

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
    {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between"></div>
            </div>
        </>
    )}
    </Disclosure>
  )
}

export default Navbar;