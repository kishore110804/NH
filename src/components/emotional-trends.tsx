"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const emotionalData = [
  { date: "Mon", happiness: 65, anxiety: 35, energy: 50 },
  { date: "Tue", happiness: 60, anxiety: 40, energy: 45 },
  { date: "Wed", happiness: 55, anxiety: 45, energy: 40 },
  { date: "Thu", happiness: 70, anxiety: 30, energy: 60 },
  { date: "Fri", happiness: 75, anxiety: 25, energy: 65 },
  { date: "Sat", happiness: 80, anxiety: 20, energy: 70 },
  { date: "Sun", happiness: 85, anxiety: 15, energy: 75 },
]

export default function EmotionalTrends() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="font-playball text-3xl font-bold">Weekly Emotional Trends</CardTitle>
          <CardDescription>
            Track your emotional patterns over time to gain insights into your mental wellbeing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ChartContainer>
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={emotionalData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="happiness"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name="Happiness"
                    />
                    <Area
                      type="monotone"
                      dataKey="anxiety"
                      stackId="2"
                      stroke="#f43f5e"
                      fill="#f43f5e"
                      fillOpacity={0.6}
                      name="Anxiety"
                    />
                    <Area
                      type="monotone"
                      dataKey="energy"
                      stackId="3"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      name="Energy"
                    />
                    <ChartLegend>
                      <ChartLegendItem name="Happiness" color="#10b981" />
                      <ChartLegendItem name="Anxiety" color="#f43f5e" />
                      <ChartLegendItem name="Energy" color="#3b82f6" />
                    </ChartLegend>
                  </AreaChart>
                </ResponsiveContainer>
              </Chart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-playball text-3xl font-bold">AI Insights</CardTitle>
          <CardDescription>Personalized recommendations based on your emotional patterns.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Positive Trend Detected</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your happiness levels have been steadily increasing over the past week. Keep up the good work!
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Anxiety Management</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your anxiety levels have decreased. The breathing exercises you've been practicing seem to be helping.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Energy Boost</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your energy levels are improving. Consider maintaining your current sleep schedule and physical
                activity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

