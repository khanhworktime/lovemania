import { SVGProps } from "react";

interface WalletIconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
}

export default function WalletIcon({
  width = 24,
  height = 24,
  className = "",
  strokeColor = "#4B164C",
  fillColor = "#4B164C",
  ...props
}: WalletIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="15.4999"
        y="9.5"
        width="7"
        height="11"
        rx="1.5"
        stroke={strokeColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49994 9C7.67151 9 6.99994 9.67157 6.99994 10.5V19.5C6.99994 20.3284 7.67151 21 8.49994 21H18.4999C19.3284 21 19.9999 20.3284 19.9999 19.5V10.5C19.9999 9.67157 19.3284 9 18.4999 9H8.49994ZM10.4999 16.5C11.3284 16.5 11.9999 15.8284 11.9999 15C11.9999 14.1716 11.3284 13.5 10.4999 13.5C9.67151 13.5 8.99994 14.1716 8.99994 15C8.99994 15.8284 9.67151 16.5 10.4999 16.5Z"
        fill={fillColor}
      />
    </svg>
  );
}
