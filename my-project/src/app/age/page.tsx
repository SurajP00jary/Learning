"use client";

import Image from "next/image";
import { useState } from "react";

export default function Age() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    if (age >= "18") {
      setMessage("you  are eligible");
    } else {
      setMessage("sorry you are not eligible");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-white">
      <div className="font-bold text-3xl  text-black cursor-pointer">
        <h1>Age section</h1>
        <form className="bg-gray-400 rounded-md" onSubmit={(e) => submit(e)}>
          <label>enter your age</label>
          <input type="number" onChange={(e) => setAge(e.target.value)}></input>

          <button className="text-black p-2" type="submit">
            submit
          </button>
        </form>
        {message && age && (
          <h1 className="text-4xl text-black">
            your age is {age} and {message}
          </h1>
        )}
      </div>
    </main>
  );
}
