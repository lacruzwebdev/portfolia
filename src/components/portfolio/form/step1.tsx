import { Button } from "@/components/ui/button";
import { FormControl, FormMessage } from "@/components/ui/form";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useOnboardingStore } from "@/store/onboarding";
import { step1Schema, type Step1Values } from "@/types/portfolio";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { ImageUpload } from "@/components/ui/image-upload";

export default function Step1() {
  const { formData } = useOnboardingStore()
  const form = useForm<Step1Values>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      nombre: formData.nombre ?? "",
      apellidos: formData.apellidos ?? "",
      titulo: formData.titulo ?? "",
      idiomas: formData.idiomas ?? [],
      bio: formData.bio ?? "",
      imagenPerfil: formData.imagenPerfil ?? "",
    }
  })

  const idiomaItems = useFieldArray({
    control: form.control,
    name: "idiomas"
  })

  const niveles = [
    { value: 1, label: "Básico" },
    { value: 2, label: "Intermedio" },
    { value: 3, label: "Avanzado" },
    { value: 4, label: "Nativo" },
  ]

  const { setFormData, nextStep } = useOnboardingStore()

  const onSubmit = (values: Step1Values) => {
    setFormData(values)
    nextStep()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="imagenPerfil"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen de Perfil</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ?? undefined}
                    onChange={field.onChange}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellidos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellidos</FormLabel>
                  <FormControl>
                    <Input placeholder="Tus apellidos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="titulo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título Profesional</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Desarrollador Full Stack" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Idiomas</h2>
              <Button
                type="button"
                variant="outline"
                onClick={() => idiomaItems.append({
                  idioma: "",
                  nivel: 1
                })}
              >
                Agregar Idioma
              </Button>
            </div>
            {idiomaItems.fields.map((field, index) => (
              <div key={field.id} className="space-y-4 p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Idioma {index + 1}</h3>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => idiomaItems.remove(index)}
                  >
                    Eliminar
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`idiomas.${index}.idioma`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Idioma</FormLabel>
                        <FormControl>
                          <Input placeholder="Inglés" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`idiomas.${index}.nivel`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nivel {niveles.find(nivel => nivel.value == field.value)?.label}</FormLabel>
                        <FormControl>
                          <Slider defaultValue={[1]} min={1} max={4} step={1} onValueChange={(e) => field.onChange(e[0])} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biografía</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntanos sobre ti"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">
            Siguiente
          </Button>
        </div>
      </form>
    </Form>
  )
}
