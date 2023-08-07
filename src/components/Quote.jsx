import React, { useEffect, useState } from "react";
import { CircularProgress } from '@mui/material';

export default function Quote() {

  let [ quote, setQuote ] = useState(null);
  let [category, setCategory] = useState("inspirational");

  const options = {
    method: 'GET',
    headers: {
      "X-Api-Key": "CFM9W2yHq1XPZuUZljGpBg==stDGaxbZGeh70oJ8",
    },
  };

useEffect (() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, options)
    .then((response) => {return response.json()})
    .then(data => setQuote(data[0].quote))
  }, [category]);

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen w-screen" style={{height: '90vh'}}>
      <h1 className="text-slate-500 text-3xl">Quote of the day</h1>
      {quote !== null ? <p className="mt-4 max-w-[80%] text-center">&quot;{quote}&quot; <strong> ~ &#40;{category}&#41; </strong></p> : <CircularProgress />}
      <div className="flex flex-wrap justify-center space-x-2 mt-3">
        <button className="mt-5 px-3 py-2 bg-slate-400 border rounded-lg hover:bg-slate-950 hover:text-slate-400 transition duration-300 ease-in-out" onClick={() => setCategory("fitness")}>Fitness</button>
        <button className="mt-5 px-3 py-2 bg-yellow-400 border rounded-lg hover:bg-slate-950 hover:text-yellow-400 transition duration-300 ease-in-out" onClick={() => setCategory("humor")}>Humour</button>
        <button className="mt-5 px-3 py-2 bg-red-400 border rounded-lg hover:bg-slate-950 hover:text-red-400 transition duration-300 ease-in-out" onClick={() => setCategory("inspirational")}>Inspiration</button>
        <button className="mt-5 px-3 py-2 bg-green-400 border rounded-lg hover:bg-slate-950 hover:text-green-400 transition duration-300 ease-in-out" onClick={() => setCategory("money")}>Money</button>
        <button className="mt-5 px-3 py-2 bg-sky-400 border rounded-lg hover:bg-slate-950 hover:text-sky-400 transition duration-300 ease-in-out" onClick={() => setCategory("experience")}>Experience</button>
        <button className="mt-5 px-3 py-2 bg-rose-300 border rounded-lg hover:bg-slate-950 hover:text-rose-300 transition duration-300 ease-in-out" onClick={() => setCategory("love")}>Love</button>
        <button className="mt-5 px-3 py-2 bg-amber-500 border rounded-lg hover:bg-slate-950 hover:text-amber-500 transition duration-300 ease-in-out" onClick={() => setCategory("death")}>Death</button>
        <button className="mt-5 px-3 py-2 bg-purple-500 border rounded-lg hover:bg-slate-950 hover:text-purple-500 transition duration-300 ease-in-out" onClick={() => setCategory("dreams")}>Dream</button>                
      </div>
    </div>
    </>
  );
}
