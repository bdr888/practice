import { ReactNode } from "react";

export type ProblemProps = {
  title: string;
  description: string;
  requirements?: string[];
  children?: ReactNode;
  result: string;
};

export type SolutionProps = {
  children: ReactNode;
  result: ReactNode;
};

export const Problem = ({
  title,
  description,
  requirements,
  result,
  children,
}: ProblemProps) => {
  return (
    <div className="p-4">
      <div className="font-semibold text-lg mb-2">{title}</div>
      <div className="mb-2">{description}</div>
      {requirements ? (
        <>
          <div className="italic font-semibold mb-1">Requirements:</div>
          <ol className="mb-2">
            {requirements?.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </>
      ) : null}
      <div>
        <div className="italic font-semibold mb-1">Result:</div>
        <div>{result}</div>
      </div>
      {children}
    </div>
  );
};

export const Solution = ({ result, children }: SolutionProps) => {
  return (
    <div className="p-4 max-w-lg">
      <div className="font-semibold text-lg mb-2">Solution:</div>
      {children}
      <div className="mt-4 mb-2 font-semibold text-lg ">Result: </div>
      {result ? (
        <div className="bg-black text-white py-2 px-4 font-mono">{result}</div>
      ) : null}
    </div>
  );
};
