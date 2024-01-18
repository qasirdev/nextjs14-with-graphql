import React from 'react'

const Header = () => {
  return (
    <nav className="flex flex-col p-2 max-w-5xl mx-auto">
      <h1 className="text-5xl text-black text-center">
        Top{" "}
        <span className="underline underline-offset-8 decoration-red-500">
          Books{" "}
        </span>
        Of All Time
      </h1>
    </nav>
  )
}

export default Header