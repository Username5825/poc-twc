"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DialogTwc,
  DialogTwcTrigger,
  DialogTwcContent,
  DialogTwcHeader,
  DialogTwcFooter,
  DialogTwcTitle,
  DialogTwcDescription,
  DialogTwcClose,
} from "../components/twc/dialog-twc";
import {
  CardTwc,
  CardTwcContent,
  CardTwcDescription,
  CardTwcFooter,
  CardTwcHeader,
  CardTwcTitle,
} from "@/components/twc/card-twc";
import { ButtonTwc } from "@/components/twc/button-twc";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  AvatarTwc,
  AvatarTwcFallback,
  AvatarTwcImage,
} from "@/components/twc/avatar-twc";
import { Checkbox } from "@radix-ui/react-checkbox";
import { CheckboxTwc } from "@/components/twc/checkbox-twc";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <WithShadcn />
      <WithTwc />
      <Notes />
    </div>
  );
}

// ---------- SHADCN ---------- //
function WithShadcn() {
  return (
    <div className="flex p-4 gap-6 border  border-neutral-300">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile (Server)</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button variant="outline">Button Shadcn</Button>

      <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}

// ---------- TWC ---------- //
function WithTwc() {
  return (
    <div className="flex p-4 gap-6 border  border-neutral-300 min-h-[300px] bg-neutral-100">
      <CardTwc className="w-[350px]">
        <CardTwcHeader>
          <CardTwcTitle>Create project</CardTwcTitle>
          <CardTwcDescription>
            Deploy your new project in one-click.
          </CardTwcDescription>
        </CardTwcHeader>
        <CardTwcContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardTwcContent>
        <CardTwcFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardTwcFooter>
      </CardTwc>

      <DialogTwc>
        <DialogTwcTrigger asChild>
          <Button variant="outline">Edit Profile (Client)</Button>
        </DialogTwcTrigger>
        <DialogTwcContent className="sm:max-w-[425px]">
          <DialogTwcHeader>
            <DialogTwcTitle>Edit profile</DialogTwcTitle>
            <DialogTwcDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogTwcDescription>
          </DialogTwcHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogTwcFooter className="sm:justify-start">
            <DialogTwcClose asChild>
              <ButtonTwc type="button" $variant="secondary">
                Close
              </ButtonTwc>
            </DialogTwcClose>
            <ButtonTwc>Save</ButtonTwc>
          </DialogTwcFooter>
        </DialogTwcContent>
      </DialogTwc>

      <ButtonTwc $variant="outline">Button Twc</ButtonTwc>

      <AvatarTwc className="size-10">
        <AvatarTwcImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarTwcFallback>CN</AvatarTwcFallback>
      </AvatarTwc>

      <div>
        <CheckboxTwc id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}

function Notes() {
  return (
    <CardTwc className="bg-orange-100 min-h-[200px] p-4  max-w-[500px]">
      <div className="flex gap-4 w-full">
        <CardTwcContent className="border border-neutral-500">
          <p>Not working well: </p>
          <p>- Label </p>
          <p>- Select </p>
        </CardTwcContent>

        <CardTwcContent className="border border-neutral-500">
          <p>Working: </p>
          <p>- Card</p>
          <p>- Button</p>
          <p>- Avatar</p>
        </CardTwcContent>
      </div>
    </CardTwc>
  );
}
