import { useState } from "react";
import { scaleLinear } from "@visx/scale";
import { Circle } from "@visx/shape";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { TooltipWithBounds, useTooltip } from "@visx/tooltip";

export default function LineGraph() {
  // Example data
  const data = [
    { x: 10, y: 20 },
    { x: 20, y: 40 },
    { x: 30, y: 10 },
    { x: 40, y: 60 },
    { x: 50, y: 30 },
  ];

  const width = 400;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };

  // Scales
  const xScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.x))],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.y))],
    range: [height - margin.bottom, margin.top], // flip so bigger is "up"
  });

  // Tooltip setup
  const { tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip } =
    useTooltip();

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height} style={{ border: "1px solid #ccc" }}>
        {/* Axes */}
        <AxisBottom top={height - margin.bottom} scale={xScale} />
        <AxisLeft left={margin.left} scale={yScale} />

        {/* Data points */}
        {data.map((d, i) => {
          const cx = xScale(d.x);
          const cy = yScale(d.y);
          return (
            <Circle
              key={i}
              cx={cx}
              cy={cy}
              r={6}
              fill="teal"
              onMouseEnter={() =>
                showTooltip({
                  tooltipData: d,
                  tooltipLeft: cx,
                  tooltipTop: cy,
                })
              }
              onMouseLeave={hideTooltip}
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltipData && (
        <TooltipWithBounds
          top={tooltipTop}
          left={tooltipLeft}
          style={{ backgroundColor: "white", color: "black" }}
        >
          x: {tooltipData.x}, y: {tooltipData.y}
        </TooltipWithBounds>
      )}
    </div>
  );
}
