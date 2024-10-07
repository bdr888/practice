"use client";

import { FormEvent, useState } from "react";
import { Problem, Solution } from "../LeetCode";

export default function ReverseArray() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function reverse() {
    // in place
    const arr = input.split(", ");
    const reveresedArray = arr.reverse();
    setResult(reveresedArray.join(", "));

    // with a copy
    // const result = arr.split().reverse()

    // without reverse
    // for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // Swap elements at index i and (array.length - 1 - i)
    // const temp = arr[i];
    // arr[i] = arr[arr.length - 1 - i];
    // arr[arr.length - 1 - i] = temp;
    // }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    reverse();
  }

  return (
    <div>
      <Problem
        title="Reverse Array"
        description="Reverse the items in an array"
        result="An array with all the same items, but in reverse order"
      />
      <Solution result={result}>
        <form
          className="flex flex-col max-w-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="mb-2">
            Input <span className="italic">(array of anything)</span>
          </label>
          <input
            className="border-black border-solid border-2 px-2 py-1 rounded mb-2"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold rounded p-2"
          >
            Submit
          </button>
        </form>
      </Solution>
    </div>
  );
}
