import { twc } from "@/lib/utils/twc";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const DialogTwc = DialogPrimitive.Root;

const DialogTwcTrigger = DialogPrimitive.Trigger;

const DialogTwcPortal = DialogPrimitive.Portal;

const DialogTwcClose = DialogPrimitive.Close;

const DialogTwcOverlay = twc(DialogPrimitive.Overlay)`
  fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out 
  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
`;

const DialogTwcContent = twc(DialogPrimitive.Content)`
  fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 
  border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in 
  data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
  data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
  data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
  data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
`;

const DialogTwcHeader = twc.div`
  flex flex-col space-y-1.5 text-center sm:text-left
`;

const DialogTwcFooter = twc.div`
  flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2
`;

const DialogTwcTitle = twc(DialogPrimitive.Title)`
  text-lg font-semibold leading-none tracking-tight
`;

const DialogTwcDescription = twc(DialogPrimitive.Description)`
  text-sm text-muted-foreground
`;

export {
  DialogTwc,
  DialogTwcPortal,
  DialogTwcOverlay,
  DialogTwcClose,
  DialogTwcTrigger,
  DialogTwcContent,
  DialogTwcHeader,
  DialogTwcFooter,
  DialogTwcTitle,
  DialogTwcDescription,
};
