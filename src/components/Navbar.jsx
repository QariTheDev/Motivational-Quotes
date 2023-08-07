import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="bg-purple-500 justify-between text-white flex items-center">
        <h1 className="px-10 py-5 text-2xl font-medium">
          {props.title}
        </h1>
      </nav>
    </>
  )
}