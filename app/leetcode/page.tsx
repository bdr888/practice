import Link from "next/link";

export default function LeetCode() {
  return (
    <div>
      <div>LeetCode practice</div>
      <div>Problems:</div>
      <div className="flex flex-col">
        <Link href={"/leetcode/array-count-items"}>
          Count items in an array
        </Link>
        <Link href={"/leetcode/string-validation"}>String validation</Link>
        <Link href={"/leetcode/array-reverse"}>Reverse array</Link>
      </div>
    </div>
  );
}
