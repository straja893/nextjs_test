"use client";

import { useAtom } from "jotai";
import { countAtom } from "../atoms/countAtom";
import { Button } from "@/components/ui/button";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <span>{count}</span>
      <div>
        <Button
          size="sm"
          variant="default"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </Button>

        <Button
          size="sm"
          variant="default"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
