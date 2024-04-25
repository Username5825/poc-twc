import { twc } from "@/lib/utils/twc";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

// TODO: Include Check (from lucide-react)

const CheckboxTwc = twc(CheckboxPrimitive.Root)`
  peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none 
  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
  disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
`;

const CheckboxTwcIndicator = twc(CheckboxPrimitive.Indicator)`
  flex items-center justify-center text-current
`;

export { CheckboxTwc, CheckboxTwcIndicator };
