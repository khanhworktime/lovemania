import React, { forwardRef } from "react";

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  children?: React.ReactNode;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  (
    { size = 24, width, height, color = "#4B164C", children, ...props },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width={width || size}
        height={height || size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // Apply color to stroke if the element has a stroke attribute
              ...(child.props.stroke && { stroke: color }),
              // Apply color to fill if the element has a fill attribute and it's not "none"
              ...(child.props.fill &&
                child.props.fill !== "none" && { fill: color }),
            });
          }
          return child;
        })}
      </svg>
    );
  }
);

IconBase.displayName = "IconBase";

export default IconBase;
