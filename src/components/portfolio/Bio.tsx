import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BioProps {
  bio: string
}

export default function Bio({ bio }: BioProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Biografía</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  )
}

