import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useOnboardingStore } from "@/store/onboarding"
import { step2Schema, type Step2Values } from "@/types/portfolio"

export default function Step2() {
  const { formData, setFormData, nextStep, prevStep } = useOnboardingStore()
  const form = useForm<Step2Values>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      educacion: formData.educacion || [],
      habilidades: formData.habilidades || "",
    },
  })

  const educationItems = useFieldArray({
    control: form.control,
    name: "educacion"
  })

  async function onSubmit(values: Step2Values) {
    setFormData({ ...formData, ...values })
    nextStep()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Educación</h2>
            <Button
              type="button"
              variant="default"
              onClick={() => educationItems.append({
                institucion: "",
                titulo: "",
                fechaInicio: "",
                fechaFin: "",
                descripcion: ""
              })}
            >
              Agregar Educación
            </Button>
          </div>

          {educationItems.fields.map((field, index) => (
            <div key={field.id} className="space-y-4 p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Educación {index + 1}</h3>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => educationItems.remove(index)}
                >
                  Eliminar
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`educacion.${index}.institucion`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institución</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la institución" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`educacion.${index}.titulo`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título Obtenido</FormLabel>
                      <FormControl>
                        <Input placeholder="Título obtenido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`educacion.${index}.fechaInicio`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Inicio</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`educacion.${index}.fechaFin`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Fin</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`educacion.${index}.descripcion`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe tu experiencia educativa"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

        <FormField
          control={form.control}
          name="habilidades"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habilidades</FormLabel>
              <FormControl>
                <Input placeholder="Ej: JavaScript, React, Node.js" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep}>
            Anterior
          </Button>
          <Button type="submit">
            Siguiente
          </Button>
        </div>
      </form>
    </Form>
  )
}