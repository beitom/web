"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm, ValidationError } from "@formspree/react"

export default function JobApplicationForm({ jobTitle, cities }: { jobTitle: string; cities: string[] }) {
  const [state, handleSubmit] = useForm("mrbgleol")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: cities.length === 1 ? cities[0] : "",
    canWorkLegally: false,
    linkedin: "",
    googleScholar: "",
    github: "",
    personalWebsite: "",
    aboutYourself: "",
    cvLink: "",
    supplementalLink: ""
  })

  // const [cvFile, setCvFile] = useState<File | null>(null)
  // const [supplementalFile, setSupplementalFile] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, city: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, canWorkLegally: checked }))
  }

  if (state.succeeded) {
    return (
      <p className="text-center text-green-500 border rounded-lg p-4">
        🎉 Thanks for applying! We'll get back to you soon.
      </p>
    )
  }

  // const handleFileChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   setter: React.Dispatch<React.SetStateAction<File | null>>
  // ) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setter(e.target.files[0])
  //   }
  // }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{jobTitle} Application</CardTitle>
        <CardDescription className="text-center">Please fill out the form below to apply</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select
              name="city"
              onValueChange={handleSelectChange}
              required
              disabled={cities.length === 1}
              value={formData.city}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent id="city">
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="canWorkLegally" checked={formData.canWorkLegally} onCheckedChange={handleCheckboxChange} />
            <Label htmlFor="canWorkLegally">I can legally work in {formData.city || "the selected city"}</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvLink">Link to CV *</Label>
            <Input id="cvLink" name="cvLink" type="url" value={formData.cvLink} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn *</Label>
            <Input
              id="linkedin"
              name="linkedin"
              type="url"
              required
              value={formData.linkedin}
              onChange={handleInputChange}
            />
            <ValidationError prefix="LinkedIn" field="linkedin" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="googleScholar">Google Scholar (optional)</Label>
            <Input
              id="googleScholar"
              name="googleScholar"
              type="url"
              value={formData.googleScholar}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub (optional)</Label>
            <Input id="github" name="github" type="url" value={formData.github} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="personalWebsite">Personal Website (optional)</Label>
            <Input
              type="url"
              id="personalWebsite"
              name="personalWebsite"
              value={formData.personalWebsite}
              onChange={handleInputChange}
            />
          </div>
          {/*<div className="space-y-2">*/}
          {/*  <Label htmlFor="cv">Link to CV *</Label>*/}
          {/*  <Input*/}
          {/*    id="cv"*/}
          {/*    name="cv"*/}
          {/*    type="file"*/}
          {/*    accept=".pdf"*/}
          {/*    required*/}
          {/*    onChange={(e) => handleFileChange(e, setCvFile)}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="space-y-2">
            <Label htmlFor="aboutYourself">Tell us more about yourself (optional)</Label>
            <Textarea
              id="aboutYourself"
              name="aboutYourself"
              value={formData.aboutYourself}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supplementalLink">Link to Additional Info (optional)</Label>
            <Input
              id="supplementalLink"
              name="supplementalLink"
              type="url"
              value={formData.supplementalLink}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={state.submitting}>
            Submit Application
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
