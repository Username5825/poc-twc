import { twc } from "@/lib/utils/twc";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const AvatarTwc = twc(AvatarPrimitive.Root)`
  relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full
`;

const AvatarTwcImage = twc(AvatarPrimitive.Image)`
  aspect-square h-full w-full
`;

const AvatarTwcFallback = twc(AvatarPrimitive.Fallback)`
  flex h-full w-full items-center justify-center rounded-full bg-muted
`;

export { AvatarTwc, AvatarTwcImage, AvatarTwcFallback };
