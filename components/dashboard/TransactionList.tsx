import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

// Mock data
const recentTransactions = [
    {
        id: "1",
        amount: 1500,
        category: "Salary",
        type: "income",
        date: "2024-02-16",
        description: "Freelance Work",
    },
    {
        id: "2",
        amount: 300,
        category: "Food",
        type: "expense",
        date: "2024-02-15",
        description: "Lunch",
    },
    {
        id: "3",
        amount: 120,
        category: "Transport",
        type: "expense",
        date: "2024-02-14",
        description: "Bus Fare",
    },
]

export function TransactionList() {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${transaction.type === 'income' ? 'bg-income/10 border-income/20' : 'bg-expense/10 border-expense/20'}`}>
                                {transaction.type === 'income' ? (
                                    <ArrowUpIcon className="h-4 w-4 text-income" />
                                ) : (
                                    <ArrowDownIcon className="h-4 w-4 text-expense" />
                                )}
                            </div>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{transaction.description}</p>
                                <p className="text-xs text-muted-foreground">
                                    {transaction.category} • {transaction.date}
                                </p>
                            </div>
                            <div className={`ml-auto font-medium ${transaction.type === 'income' ? 'text-income' : 'text-expense'}`}>
                                {transaction.type === 'income' ? '+' : '-'}฿{transaction.amount.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
