"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
// import { createClient } from "@/utils/supabase/client" // Will use later

export function TransactionForm() {
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState<"income" | "expense">("expense")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Logic to save to Supabase will go here
        console.log({ amount, description, type })
        // Reset form
        setAmount("")
        setDescription("")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Transaction</CardTitle>
                <CardDescription>
                    Record your income or daily expenses.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                        <Button
                            type="button"
                            variant={type === "income" ? "default" : "outline"}
                            className={type === "income" ? "bg-income hover:bg-income/90 border-income ring-income text-income-foreground" : ""}
                            onClick={() => setType("income")}
                        >
                            Income
                        </Button>
                        <Button
                            type="button"
                            variant={type === "expense" ? "default" : "outline"}
                            className={type === "expense" ? "bg-expense hover:bg-expense/90 border-expense ring-expense text-expense-foreground" : ""}
                            onClick={() => setType("expense")}
                        >
                            Expense
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="number"
                            placeholder="Amount (฿)"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="text-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            placeholder="Description (e.g., Lunch, Salary)"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">
                        Save Transaction
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
