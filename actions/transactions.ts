'use server'

import { db } from '@/db'
import { transactions } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { desc, sql, eq } from 'drizzle-orm'

const TransactionSchema = z.object({
    amount: z.coerce.number().positive(),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    type: z.enum(['income', 'expense']),
    date: z.coerce.date().default(() => new Date()),
})

export type TransactionData = z.infer<typeof TransactionSchema>

export async function addTransaction(data: TransactionData) {
    const result = TransactionSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: result.error.issues[0].message };
    }

    try {
        await db.insert(transactions).values({
            id: crypto.randomUUID(),
            amount: result.data.amount,
            description: result.data.description,
            category: result.data.category,
            type: result.data.type,
            date: result.data.date,
        });

        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to add transaction:', error);
        return { success: false, error: 'Failed to add transaction' };
    }
}

export async function getRecentTransactions(limit = 5) {
    try {
        const data = await db.select().from(transactions).orderBy(desc(transactions.date)).limit(limit);
        return { success: true, data };
    } catch (error) {
        console.error('Failed to get transactions:', error);
        return { success: false, error: 'Failed to get transactions' };
    }
}

export async function getFinancialSummary() {
    try {
        const incomeResult = await db.select({
            total: sql<number>`sum(${transactions.amount})`
        }).from(transactions).where(eq(transactions.type, 'income'));

        const expenseResult = await db.select({
            total: sql<number>`sum(${transactions.amount})`
        }).from(transactions).where(eq(transactions.type, 'expense'));

        const income = incomeResult[0].total || 0;
        const expense = expenseResult[0].total || 0;
        const balance = income - expense;

        return { success: true, data: { income, expense, balance } };
    } catch (error) {
        console.error('Failed to get summary:', error);
        return { success: false, error: 'Failed to get summary' };
    }
}
