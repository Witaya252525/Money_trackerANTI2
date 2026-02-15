"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    {
        name: "Jan",
        income: 4000,
        expenses: 2400,
    },
    {
        name: "Feb",
        income: 3000,
        expenses: 1398,
    },
    {
        name: "Mar",
        income: 2000,
        expenses: 9800,
    },
    {
        name: "Apr",
        income: 2780,
        expenses: 3908,
    },
    {
        name: "May",
        income: 1890,
        expenses: 4800,
    },
    {
        name: "Jun",
        income: 2390,
        expenses: 3800,
    },
    {
        name: "Jul",
        income: 3490,
        expenses: 4300,
    },
];

export function MonthlyOverviewChart() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>
                    Income vs Expenses for the last 7 months
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend />
                        <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} name="Income" />
                        <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expenses" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
