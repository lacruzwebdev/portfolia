'use client'
import { useOnboardingStore } from "@/store/onboarding"
import Step1 from "./form/step1"
import Step2 from "./form/step2"
import Step3 from "./form/step3"
import type { Portfolio } from "@/types/portfolio"
import { useEffect, useState } from "react"
import { Spinner } from "../ui/spinner"

interface PortfolioProps {
  portfolio?: Portfolio
}

export default function PortfolioMultistepForm({ portfolio }: PortfolioProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { step, setFormData, setStep } = useOnboardingStore()


  useEffect(() => {
    if (portfolio) {
      setFormData(portfolio)
    }
    setIsLoading(false)
  }, [portfolio, setFormData])

  if (isLoading) {
    return <div className="grid place-items-center h-[90svh]"><Spinner /></div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Configura tu Portfolio</h1>
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <div className={`flex-1 h-2 rounded-l-full ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
          <div className={`flex-1 h-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
          <div className={`flex-1 h-2 rounded-r-full ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span className={`${portfolio ? 'cursor-pointer' : ''}`} onClick={portfolio ? () => setStep(1) : undefined}>Información Personal</span>
          <span className={`${portfolio ? 'cursor-pointer' : ''}`} onClick={portfolio ? () => setStep(2) : undefined}>Educación y Habilidades</span>
          <span className={`${portfolio ? 'cursor-pointer' : ''}`} onClick={portfolio ? () => setStep(3) : undefined}>Experiencia</span>
        </div>
      </div>

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </div>
  )
}
