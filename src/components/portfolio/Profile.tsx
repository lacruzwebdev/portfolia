import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface ProfileProps {
  name: string
  lastName: string
  title: string
  image: string | null
}

export default function Profile({ name, lastName, title, image }: ProfileProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src={image ?? "/placeholder.svg?height=128&width=128"} alt={`${name} ${lastName}`} />
            <AvatarFallback className="text-2xl">
              {name.charAt(0)}
              {lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              {name} {lastName}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

