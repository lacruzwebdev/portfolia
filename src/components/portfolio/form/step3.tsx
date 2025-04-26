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
import { savePortfolio } from "@/server/actions/portfolio"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { step3Schema, type Step3Values } from "@/types/portfolio"

export default function Step3() {
  const { formData, prevStep, setStep } = useOnboardingStore()
  const router = useRouter()
  const form = useForm<Step3Values>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      experiencia: formData.experiencia || [],
    },
  })

  const experienceItems = useFieldArray({
    control: form.control,
    name: "experiencia"
  })

  async function onSubmit(values: Step3Values) {
    try {
      const completeData = { ...formData, ...values }
      const result = await savePortfolio(completeData)

      if (result.success) {
        toast.success("Portfolio guardado exitosamente")
        router.push("/dashboard")
        setTimeout(() => {
          setStep(1)
        }, 1000)
      } else {
        toast.error("Error al guardar el portfolio")
      }
    } catch (error) {
      toast.error("Error al guardar el portfolio")
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Experiencia Laboral</h2>
            <Button
              type="button"
              variant="default"
              onClick={() => experienceItems.append({
                empresa: "",
                cargo: "",
                fechaInicio: "",
                fechaFin: "",
                descripcion: ""
              })}
            >
              Agregar Experiencia
            </Button>
          </div>

          {experienceItems.fields.map((field, index) => (
            <div key={field.id} className="space-y-4 p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Experiencia {index + 1}</h3>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => experienceItems.remove(index)}
                >
                  Eliminar
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`experiencia.${index}.empresa`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`experiencia.${index}.cargo`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input placeholder="Puesto ocupado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`experiencia.${index}.fechaInicio`}
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
                  name={`experiencia.${index}.fechaFin`}
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
                name={`experiencia.${index}.descripcion`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe tus responsabilidades y logros"
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

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep}>
            Anterior
          </Button>
          <Button type="submit">
            Guardar Portfolio
          </Button>
        </div>
      </form>
    </Form>
  )
}