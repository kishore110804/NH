import type * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ChartProps {
  children: React.ReactNode
}

export const Chart = ({ children }: ChartProps) => {
  return <div className="chart">{children}</div>
}

interface ChartContainerProps {
  children: React.ReactNode
}

export const ChartContainer = ({ children }: ChartContainerProps) => {
  return <div className="chart-container">{children}</div>
}

interface ChartTooltipProps {
  children?: React.ReactNode
  content: React.ReactNode
}

export const ChartTooltip = ({ content }: ChartTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div></div>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface ChartTooltipContentProps {
  children?: React.ReactNode
}

export const ChartTooltipContent = ({ children }: ChartTooltipContentProps) => {
  return <div className="chart-tooltip-content">{children}</div>
}

interface ChartLegendProps {
  children: React.ReactNode
}

export const ChartLegend = ({ children }: ChartLegendProps) => {
  return <div className="chart-legend">{children}</div>
}

interface ChartLegendItemProps {
  name: string
  color: string
}

export const ChartLegendItem = ({ name, color }: ChartLegendItemProps) => {
  return (
    <div className="chart-legend-item">
      <span className="chart-legend-item-color" style={{ backgroundColor: color }}></span>
      {name}
    </div>
  )
}

