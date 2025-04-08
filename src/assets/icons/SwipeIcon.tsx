import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const ShareIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <g clipPath="url(#clip0_48_1245)">
        <rect
          x="0.961285"
          y="6.86842"
          width="10.5"
          height="16.5"
          rx="3.25"
          transform="rotate(-20 0.961285 6.86842)"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="12.9207"
          y="1.96128"
          width="10.5"
          height="16.5"
          rx="3.25"
          transform="rotate(20 12.9207 1.96128)"
          fill={props.fill}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_1245">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </IconBase>
  );
};

export default ShareIcon;
