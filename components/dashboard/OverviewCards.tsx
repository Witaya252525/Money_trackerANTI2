import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, Wallet } from "lucide-react"

export function OverviewCards() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">฿0.00</div>
                    <p className="text-xs text-muted-foreground">
                        +0% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Income</CardTitle>
                    <ArrowUpIcon className="h-4 w-4 text-income" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-income">฿0.00</div>
                    <p className="text-xs text-muted-foreground">
                        +0% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                    <ArrowDownIcon className="h-4 w-4 text-expense" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-expense">฿0.00</div>
                    <p className="text-xs text-muted-foreground">
                        +0% from last month
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
