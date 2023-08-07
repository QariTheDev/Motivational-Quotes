import React from "react";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar title="Motivational Quotes" />
      <Quote />
    </>
  )
}