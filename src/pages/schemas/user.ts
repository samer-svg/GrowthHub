import { z } from 'zod';

export const userCreateSchema = z.object({
  userName: z.string().min(3, 'User Name must be at least 3 characters'),
  email: z.string().email('Invalid email address').transform(val => val.toLowerCase()),
  password: z.string().trim().min(8,'Password must be at least 8 characters')
})

export const userUpdateSchema = z.object({
  userName: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password : z.string().trim().min(8).optional()
})