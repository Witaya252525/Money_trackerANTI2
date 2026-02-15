import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, Wallet } from "lucide-react"
import { getFinancialSummary } from "@/actions/transactions"

export async function OverviewCards() {
    const { data: summary, success } = await getFinancialSummary()

    const income = summary?.income || 0
    const expense = summary?.expense || 0
    const balance = summary?.balance || 0

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">฿{balance.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        {/* +0% from last month - TODO: Implement comparison */}
                        Current Balance
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Income</CardTitle>
                    <ArrowUpIcon className="h-4 w-4 text-income" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-income">฿{income.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        Total Income
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                    <ArrowDownIcon className="h-4 w-4 text-expense" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-expense">฿{expense.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                        Total Expenses
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
