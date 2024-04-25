// import * as React from "react";
// import { twc, TwcComponentProps } from "react-twc";
// import { Slot } from "@radix-ui/react-slot";
// import { Check, ChevronDown, ChevronUp } from "lucide-react";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const selectVariants = cva(
//   "inline-flex items-center justify-between whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       default: "bg-primary text-primary-foreground hover:bg-primary/90",
//       destructive:
//         "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//       outline:
//         "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//       secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//       ghost: "hover:bg-accent hover:text-accent-foreground",
//       link: "text-primary underline-offset-4 hover:underline",
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// );

// const selectTriggerVariants = cva(
//   "[&>span]:line-clamp-1",
//   {
//     default: "h-10 w-full",
//   },
//   {
//     defaultVariants: {
//       size: "default",
//     },
//   }
// );

// const selectContentVariants = cva(
//   "max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//   {
//     default: "relative z-50",
//   }
// );

// const selectItemVariants = cva(
//   "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//   {
//     default: "h-10 w-full",
//   },
//   {
//     defaultVariants: {
//       size: "default",
//     },
//   }
// );

// const selectSeparatorVariants = cva(
//   "-mx-1 my-1 h-px bg-muted",
//   {
//     default: "w-full",
//   },
//   {
//     defaultVariants: {
//       size: "default",
//     },
//   }
// );

// const selectScrollButtonVariants = cva(
//   "flex cursor-default items-center justify-center py-1",
//   {
//     default: "h-10 w-10",
//   },
//   {
//     defaultVariants: {
//       size: "icon",
//     },
//   }
// );

// const Select = twc(SelectPrimitive.Root).attrs({
//   className: selectVariants,
// });

// const SelectGroup = twc(SelectPrimitive.Group);

// const SelectValue = twc(SelectPrimitive.Value);

// const SelectTrigger = twc(Slot)
//   .attrs({
//     className: selectTriggerVariants,
//   })
//   .transientProps(["size"])
//   .attrs({
//     asChild: true,
//   });

// const SelectContent = twc((props: TwcComponentProps<"div">) => {
//   const { className, position = "popper", children, ...rest } = props;
//   return (
//     <SelectPrimitive.Portal>
//       <SelectPrimitive.Content
//         className={cn(selectContentVariants({ className, position }))}
//         position={position}
//         {...rest}
//       >
//         {children}
//       </SelectPrimitive.Content>
//     </SelectPrimitive.Portal>
//   );
// }).attrs({
//   className: selectContentVariants,
// });

// const SelectLabel = twc(SelectPrimitive.Label).attrs({
//   className: "py-1.5 pl-8 pr-2 text-sm font-semibold",
// });

// const SelectItem = twc(SelectPrimitive.Item)
//   .attrs({
//     className: selectItemVariants,
//   })
//   .transientProps(["size"]);

// const SelectSeparator = twc(SelectPrimitive.Separator)
//   .attrs({
//     className: selectSeparatorVariants,
//   })
//   .transientProps(["size"]);

// const SelectScrollUpButton = twc(SelectPrimitive.ScrollUpButton).attrs({
//   className: selectScrollButtonVariants,
// });

// const SelectScrollDownButton = twc(SelectPrimitive.ScrollDownButton).attrs({
//   className: selectScrollButtonVariants,
// });

// export {
//   Select,
//   SelectGroup,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
//   SelectSeparator,
//   SelectScrollUpButton,
//   SelectScrollDownButton,
// };
