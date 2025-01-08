import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer
} from "@/components/ui/drawer"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useForm, ValidationError } from "@formspree/react"

interface ContactFormProps {
  productName: string
  onClose: () => void
}

function ProductContactForm({ productName, onClose }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mjkkpdjg")
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    await handleSubmit(e)
    onClose()
  }

  return (
    <DrawerContent>
      <form onSubmit={submitForm} className="container">
        <DrawerHeader>
          <DrawerTitle>{productName} - Request a Demo</DrawerTitle>
          <DrawerDescription>Fill out the form below and we'll get back to you soon.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your company" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your needs" />
          </div>
          <Input type="hidden" name="_subject" value={productName} />
        </div>
        <DrawerFooter>
          <Button type="submit" variant="outline" disabled={state.submitting}>
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </form>
    </DrawerContent>
  )
}

export default function ProductContactButton({ productName }: { productName: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="bg-black pb-8 flex flex-row w-full justify-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="opacity-0 animate-fade-in [--animation-delay:1500ms] sm:fixed sm:bottom-4 sm:right-4 z-50 inline-flex h-12 overflow-hidden p-[1px] rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex space-x-2 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span>Request a Demo</span>
            <PaperPlaneIcon className="h-4 w-4" />
          </span>
        </Button>
      </div>

      {/* Drawer with contact form */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <ProductContactForm productName="BDocker" onClose={() => setIsOpen(false)} />
      </Drawer>
    </>
  )
}
