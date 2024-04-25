import { twc } from "@/lib/utils/twc";

const CardTwc = twc.div`rounded-xl border bg-card text-cardTwc-foreground shadow`;
const CardTwcHeader = twc.div`flex flex-col space-y-1.5 p-6`;
const CardTwcTitle = twc.h3`text-2xl font-semibold leading-none tracking-tight`;
const CardTwcDescription = twc.p`text-sm text-muted-foreground`;
const CardTwcContent = twc.div`p-6 pt-0`;
const CardTwcFooter = twc.div`flex items-center p-6 pt-0`;

export {
  CardTwc,
  CardTwcHeader,
  CardTwcFooter,
  CardTwcTitle,
  CardTwcDescription,
  CardTwcContent,
};
