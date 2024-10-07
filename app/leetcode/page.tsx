import Link from "next/link";

export default function LeetCode() {
  return (
    <div className="p-4">
      <div className="font-bold text-lg mb-4">LeetCode practice</div>
      <div className="font-semibold">Problems:</div>
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
