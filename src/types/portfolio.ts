import { z } from 'zod'

export const educacionSchema = z.object({
  institucion: z.string().min(2, "La institución debe tener al menos 2 caracteres"),
  titulo: z.string().min(2, "El título debe tener al menos 2 caracteres"),
  fechaInicio: z.string().min(2, "La fecha de inicio debe tener al menos 2 caracteres"),
  fechaFin: z.string().min(2, "La fecha de fin debe tener al menos 2 caracteres"),
  descripcion: z.string().min(2, "La descripción debe tener al menos 2 caracteres"),
})

export const experienciaSchema = z.object({
  empresa: z.string().min(2, "La empresa debe tener al menos 2 caracteres"),
  cargo: z.string().min(2, "El cargo debe tener al menos 2 caracteres"),
  fechaInicio: z.string().min(2, "La fecha de inicio debe tener al menos 2 caracteres"),
  fechaFin: z.string().min(2, "La fecha de fin debe tener al menos 2 caracteres"),
  descripcion: z.string().min(2, "La descripción debe tener al menos 2 caracteres"),
})

export const idiomaSchema = z.object({
  idioma: z.string().min(2, "El idioma debe tener al menos 2 caracteres"),
  nivel: z.number().min(1, "El nivel debe ser un número").max(4, "El nivel debe ser un número entre 1 y 5"),
})

export const step1Schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  titulo: z.string().min(2, "El título debe tener al menos 2 caracteres"),
  idiomas: z.array(z.object({
    idioma: z.string(),
    nivel: z.number()
  })),
  bio: z.string().min(2, "La biografía debe tener al menos 2 caracteres"),
  imagenPerfil: z.string().nullable()
})

export const step2Schema = z.object({
  educacion: z.array(educacionSchema),
  habilidades: z.string().min(5, "Las habilidades deben tener al menos 5 caracteres"),
})

export const step3Schema = z.object({
  experiencia: z.array(experienciaSchema),
})

export const portfolioSchema = step1Schema.merge(step2Schema).merge(step3Schema)

export type Educacion = z.infer<typeof educacionSchema>
export type Experiencia = z.infer<typeof experienciaSchema>
export type Idioma = z.infer<typeof idiomaSchema>
export type Step1Values = z.infer<typeof step1Schema>
export type Step2Values = z.infer<typeof step2Schema>
export type Step3Values = z.infer<typeof step3Schema>
export type Portfolio = z.infer<typeof portfolioSchema>