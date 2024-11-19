"use client"

import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CiLocationOn, CiMail } from "react-icons/ci"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkndqjod")
  const [wordCount, setWordCount] = useState(0)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.trim().split(/\s+/)
    setWordCount(words.length)
  }

  if (state.succeeded) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Thank You!</CardTitle>
            <CardDescription className="text-center">Your message has been sent successfully.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Contact BEIT Inc.</CardTitle>
            <CardDescription className="text-center">We'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" name="email" className="mt-1 bg-none text-white" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" name="subject" className="mt-1 bg-none text-white" required />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500" />
              </div>
              <div>
                <Label htmlFor="message">Message (max 250 words)</Label>
                <Textarea
                  id="message"
                  name="message"
                  className="mt-1 bg-none text-white"
                  rows={5}
                  onChange={handleTextChange}
                  required
                />
                <div className="text-sm text-gray-400 mt-1">Word count: {wordCount}/250</div>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />
              </div>
              <Button type="submit" disabled={state.submitting || wordCount > 250} className="w-full" variant="outline">
                {state.submitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4 text-gray-500">
            <div className="flex items-start space-x-2">
              <CiLocationOn className="size-4 mt-1 text-gray-400" />
              <div>
                <p className="font-semibold">Krakow:</p>
                <p>Mogilska 43 31-545 Kraków, Poland</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <CiLocationOn className="size-4 mt-1 text-gray-400" />
              <div>
                <p className="font-semibold">Toronto:</p>
                <p>101 College St (MaRS), Suite H230-1 Toronto, ON M5G 1L7</p>
              </div>
            </div>

            <a href="mailto:office@beit.tech" className="flex items-center space-x-2 text-blue-600 hover:text-blue-300">
              <CiMail className="size-4" />
              <span>office@beit.tech</span>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
