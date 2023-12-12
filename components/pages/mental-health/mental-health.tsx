"use client";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { useTheme } from "next-themes";

const data = [
  { name: "Excellent ⭐", mental_health: 100 },
  { name: "Pretty good", mental_health: 85 },
  { name: "Not too bad", mental_health: 65 },
  { name: "This is fine 🚨", mental_health: 55 },
  { name: "Oh no!", mental_health: 45 },
  { name: "Losing touch with reality", mental_health: 20 },
  { name: "💀", mental_health: 0 },
];

export default function MentalHealth() {
  const { theme } = useTheme();

  return (
    <div style={{ width: "100vw", height: "50vh" }}>
      {/* @ts-ignore */}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          {theme === "light" ? (
            <Line
              type="monotone"
              dataKey="mental_health"
              stroke="#000000"
              activeDot={{ r: 8 }}
            />
          ) : (
            <Line
              type="monotone"
              dataKey="mental_health"
              stroke="#FFFFFF"
              activeDot={{ r: 8 }}
            />
          )}

          <XAxis dataKey="name" />
        </LineChart>

        <h1
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          My Mental Health {"(if you can't tell already, it's deteriorating)"}
        </h1>
      </ResponsiveContainer>
    </div>
  );
}
