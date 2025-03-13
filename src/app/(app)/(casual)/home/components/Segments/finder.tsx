import { useState } from "react";
import { MatcherCard } from "../MatcherCard";

export function Finder() {
  const [switchState, setSwitchState] = useState({
    first: true,
    second: false,
  });

  return (
    <div className="relative w-full h-full">
      <MatcherCard
        currentDisplay={switchState.first}
        setCurrentDisplay={() =>
          setSwitchState({
            first: !switchState.first,
            second: !switchState.second,
          })
        }
      />
      <MatcherCard
        currentDisplay={switchState.second}
        setCurrentDisplay={() =>
          setSwitchState({
            first: !switchState.first,
            second: !switchState.second,
          })
        }
      />
    </div>
  );
}
