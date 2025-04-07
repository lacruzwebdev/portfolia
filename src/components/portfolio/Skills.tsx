import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  skills: string
}

export default function Skills({ skills }: SkillsProps) {
  const skillsArray = skills.split(',').map(skill => skill.trim())
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Habilidades</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skillsArray.map((skill, index) => (
            <Badge key={index} className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

