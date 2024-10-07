"use client";
import { FormEvent, useState } from "react";
import { Problem, Solution } from "../LeetCode";

export default function UserNameValidation() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("False");

  function validate() {
    const arr = input.split("");

    const minMax = arr.length >= 4 && arr.length <= 24;
    const firstChar = /[a-zA-Z]/.test(arr[0]);
    const lastChar = arr[arr.length - 1] !== "_";
    const alphaNumeric = arr.every((char) => /^[a-zA-Z0-9_]+$/.test(char));

    const result = minMax && firstChar && lastChar && alphaNumeric;
    return setResult(result ? "True" : "False");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validate();
  }
  return (
    <div>
      <Problem
        title={"Username Validation"}
        description={
          "Have the function take the str parameter being passed and determine if the string is a valid username according to the following rules:"
        }
        requirements={[
          "The username is between 4 and 25 characters.",
          "It must start with a letter.",
          "It can only contain letters, numbers, and the underscore character.",
          "It cannot end with an underscore character.",
        ]}
        result="If the username is valid then your program should return the string true, otherwise return the string false."
      >
        <div className="italic font-semibold my-1">Examples:</div>
        <div>
          <div>Input: "aa_" Output: false</div>
          <div>Input: "u__hello_world123" Output: true</div>
        </div>
      </Problem>
      <Solution result={result}>
        <form
          className="flex flex-col max-w-lg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Input (string)</label>
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
