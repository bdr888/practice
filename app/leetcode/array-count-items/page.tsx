"use client";
import { FormEvent, useState } from "react";
import { Problem, Solution } from "../LeetCode";

export default function ArrayCountItems() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function validate() {
    const checkedOutBikes: { [key: string]: number } = {};
    input
      .split(",")
      .forEach(
        (item) => (checkedOutBikes[item] = (checkedOutBikes[item] || 0) + 1),
      );
    const onlyOdd = Object.keys(checkedOutBikes)
      .filter((item) => checkedOutBikes[item] % 2 !== 0)
      .join();

    return setResult(onlyOdd);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validate();
  }

  return (
    <div>
      <Problem
        title="Count items in an array"
        description="For each id in the array, count the occurence, and if it is odd, return the id"
        result="Return a string, comma-delimited, of the id's of items that occur an odd number of times"
      />
      <Solution result={result}>
        <form
          className="flex flex-col max-w-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="mb-2">
            Input <span className="italic">(array of strings)</span>
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
