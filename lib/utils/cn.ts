import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { createTwc } from "@/lib/utils/twc";

// Using `clsx` + `twMerge` for a complete flexibility (taken from shadcn/ui)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// NB: By default classes are not merged. If you want to merge classes, you can use twc with tailwind-merge.
// More info: https://react-twc.vercel.app/docs/guides/class-name-prop
export const twx = createTwc({ compose: cn });
