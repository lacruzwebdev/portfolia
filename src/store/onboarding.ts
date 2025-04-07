import type { Portfolio } from '@/types/portfolio'
import { create } from 'zustand'

interface OnboardingState {
  step: number
  formData: Portfolio
  setFormData: (data: Partial<OnboardingState['formData']>) => void
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
  reset: () => void
}

const initialState = {
  nombre: "",
  apellidos: "",
  titulo: "",
  idiomas: [],
  bio: "",
  imagenPerfil: null,
  educacion: [],
  habilidades: "",
  experiencia: [],
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  formData: initialState,
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setStep: (step: number) => set({ step }),
  reset: () => set({ step: 1, formData: initialState }),
}))