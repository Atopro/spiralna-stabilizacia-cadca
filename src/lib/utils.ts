import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind-safe className combiner used by shadcn-style components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}