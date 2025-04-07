import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Palette, Bot, FileText } from 'lucide-react'
import { Nav } from '@/components/landing/nav'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center space-y-8 bg-gradient-to-b from-background to-muted">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Tu Portfolio Profesional<br />
            <span className="text-primary">en Minutos</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Crea un portfolio profesional impresionante con nuestra plataforma intuitiva.
            Destaca tu experiencia, habilidades y logros de manera elegante.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/auth/login">
                Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Todo lo que Necesitas para Brillar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Diseño Moderno</h3>
            <p className="text-muted-foreground">
              Plantillas elegantes y responsivas que se adaptan a cualquier dispositivo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Personalización Total</h3>
            <p className="text-muted-foreground">
              Adapta cada aspecto de tu portfolio a tu estilo personal.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Asistente IA</h3>
            <p className="text-muted-foreground">
              Recibe sugerencias inteligentes para mejorar tu contenido.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Exportación PDF</h3>
            <p className="text-muted-foreground">
              Descarga tu portfolio en formato PDF para uso offline.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary to-primary-foreground overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para Destacar?
            </h2>
            <p className="max-w-2xl mb-8 text-primary-foreground/90">
              Únete a miles de profesionales que ya han creado su portfolio con nuestra plataforma.
              Es gratis para empezar.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/login">
                Crear Mi Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Portfolio Generator. Todos los derechos reservados.
            </p>
            <nav className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacidad
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Términos
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}