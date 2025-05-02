import { validationMessages } from '@/libs/validation.utility';
import { z } from 'zod';

// Product variant schema
export const productVariantSchema = z.object({
  sku: z.string().min(1, { message: validationMessages.required() }),
  name: z.string().min(1, { message: validationMessages.required() }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  salePrice: z.number().min(0, { message: 'Sale price must be a positive number' }),
  quantity: z.number().int().min(0, { message: 'Quantity must be a positive integer' }),
  soldCount: z.number().int().min(0).optional(),
  attributes: z.record(z.string()),
  images: z.array(z.string()).min(1, { message: 'At least one image is required' }),
});

export type ProductVariantSchema = z.infer<typeof productVariantSchema>;

// Product schema
export const productSchema = z.object({
  name: z.string().min(1, { message: validationMessages.required() }),
  description: z.string().min(1, { message: validationMessages.required() }),
  type: z.enum(['simple', 'variable']),
  images: z.array(z.string()).min(1, { message: 'At least one image is required' }),
  categories: z.array(z.string()).optional(),
  primaryCategoryId: z.string().nullable(),
  brandId: z.string().nullable(),
  variants: z.array(productVariantSchema).min(1, { message: 'At least one variant is required' }),
  tags: z.array(z.string()).optional(),
  specifications: z.record(z.string()).optional(),
  availableFrom: z.string().optional(),
  availableTo: z.string().optional(),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  isOnSale: z.boolean().default(false),
  isNewArrival: z.boolean().default(false),
  isBestSeller: z.boolean().default(false),
  viewCount: z.number().int().min(0).optional(),
  totalSoldCount: z.number().int().min(0).optional(),
  averageRating: z.number().min(0).max(5).optional(),
  reviewCount: z.number().int().min(0).optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
