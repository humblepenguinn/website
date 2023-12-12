"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { Languages } from "@/types";
import getIconByName from "./getIcon";
import React from "react";

interface LanguagesProps {
  languages: Languages[];
}

export function Languages({ languages }: LanguagesProps) {
  const data = languages.slice(0, 10);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Languages</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
              paddingAngle={3}
              stroke="black"
              dataKey="proficiency"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#1f9aef"} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#000000",
              }}
              itemStyle={{ color: "#FFFFF" }}
              formatter={(text, name, entry) => [entry.payload.name]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center">
          <div className="p-4">
            {data.map((entry, index) => (
              <div
                key={`label-${index}`}
                className="mb-2 flex items-center text-sm"
              >
                <span
                  className="mr-2 inline-block h-4 w-4 shadow-sm"
                  style={{
                    backgroundColor: entry.color || "#1f9aef",
                  }}
                ></span>
                {entry.name} - {entry.text}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MostUsedLanguage({ languages }: LanguagesProps) {
  const Icon = getIconByName(languages[0].name);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Most used language
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="text-lg font-bold mr-2">{languages[0].name}</div>
          {React.createElement(Icon!, { size: 25, color: languages[0].color })}
        </div>
      </CardContent>
    </Card>
  );
}
