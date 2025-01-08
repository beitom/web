import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Publication } from "@/data/publications.data"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}
