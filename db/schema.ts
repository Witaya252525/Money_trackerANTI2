import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const transactions = sqliteTable('transactions', {
    id: text('id').primaryKey(),
    amount: integer('amount').notNull(),
    description: text('description').notNull(),
    date: integer('date', { mode: 'timestamp' }).notNull(),
    category: text('category').notNull(),
    type: text('type').notNull(), // 'income' | 'expense'
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(new Date()),
});
