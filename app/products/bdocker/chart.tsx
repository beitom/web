"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Raw data from the provided table
const rawData = [
  { molecule: "1a30", autodock_rmsd: 4.2, autodock_time: 15.0, bdocker_rmsd: 2.3, bdocker_time: 16.4 },
  { molecule: "1s38", autodock_rmsd: 3.4, autodock_time: 1.7, bdocker_rmsd: 0.5, bdocker_time: 5.3 },
  { molecule: "1uto", autodock_rmsd: 1.4, autodock_time: 1.4, bdocker_rmsd: 1.8, bdocker_time: 2.3 },
  { molecule: "1y6r", autodock_rmsd: 0.7, autodock_time: 7.4, bdocker_rmsd: 1.2, bdocker_time: 20.3 },
  { molecule: "2c3i", autodock_rmsd: 4.1, autodock_time: 4.2, bdocker_rmsd: 3.7, bdocker_time: 8.2 },
  { molecule: "2pog", autodock_rmsd: 4.2, autodock_time: 3.3, bdocker_rmsd: 2.7, bdocker_time: 8.9 },
  { molecule: "2xj7", autodock_rmsd: 2.7, autodock_time: 3.4, bdocker_rmsd: 1.4, bdocker_time: 11.9 },
  { molecule: "2yfe", autodock_rmsd: 5.4, autodock_time: 7.4, bdocker_rmsd: 4.1, bdocker_time: 10.1 },
  { molecule: "2yge", autodock_rmsd: 5.7, autodock_time: 81.8, bdocker_rmsd: 3.5, bdocker_time: 41.4 },
  { molecule: "3gy4", autodock_rmsd: 3.2, autodock_time: 2.3, bdocker_rmsd: 2.0, bdocker_time: 5.6 },
  { molecule: "3lka", autodock_rmsd: 3.4, autodock_time: 1.7, bdocker_rmsd: 2.5, bdocker_time: 5.7 },
  { molecule: "3u8k", autodock_rmsd: 3.7, autodock_time: 7.2, bdocker_rmsd: 2.1, bdocker_time: 3.7 },
  { molecule: "4f3c", autodock_rmsd: 0.9, autodock_time: 10.8, bdocker_rmsd: 1.3, bdocker_time: 24.8 },
  { molecule: "4j21", autodock_rmsd: 5.2, autodock_time: 3.2, bdocker_rmsd: 1.0, bdocker_time: 6.7 },
  { molecule: "4jia", autodock_rmsd: 5.7, autodock_time: 11.7, bdocker_rmsd: 4.2, bdocker_time: 23.7 },
  { molecule: "4kzq", autodock_rmsd: 5.7, autodock_time: 2.7, bdocker_rmsd: 1.2, bdocker_time: 5.6 },
  { molecule: "4pcs", autodock_rmsd: 2.0, autodock_time: 3.8, bdocker_rmsd: 1.6, bdocker_time: 8.5 },
  { molecule: "4tmn", autodock_rmsd: 6.1, autodock_time: 30.6, bdocker_rmsd: 7.9, bdocker_time: 24.0 }
]

// Post-process data to include speedup ratio
const data = rawData.map((item) => ({
  ...item,
  speedup: Number((item.autodock_time / item.bdocker_time).toFixed(2)),
  quality: Number((item.autodock_rmsd / item.bdocker_rmsd).toFixed(2))
}))

export default function MoleculeSpeedupChart() {
  return (
    <Card className="w-full bg-zinc-900 border-none text-white">
      <CardContent className="pt-8">
        <ChartContainer
          config={{
            speedup: {
              label: "Speedup",
              color: "hsl(var(--chart-1))"
            },
            quality: {
              label: "Quality",
              color: "hsl(var(--chart-2))"
            }
          }}
          className="aspect-[2/1]"
        >
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 30
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
            <XAxis
              dataKey="molecule"
              angle={-45}
              textAnchor="end"
              height={60}
              tickMargin={5}
              stroke="#888"
              label={{
                value: "Molecule",
                position: "insideBottom"
              }}
            />
            <YAxis
              label={{
                value: "AutoDock vs rtBDocker Improvement Ratio",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#888" }
              }}
              stroke="#888"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="speedup" fill="hsl(var(--chart-1))" radius={4} />
            <Bar dataKey="quality" fill="hsl(var(--chart-2))" radius={4} />
          </BarChart>
        </ChartContainer>
        <CardDescription className="text-center text-gray-300">
          Ratio of computational time and solution quality of (AutoDock/BDocker) across different molecules.
        </CardDescription>
      </CardContent>
    </Card>
  )
}
