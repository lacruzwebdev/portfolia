import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import PortfolioAIChat from "@/components/portfolio/PortfolioAIChat";
import CopyToClipboardButton from "@/components/copy-to-clipboard";
import { auth } from "@clerk/nextjs/server";
import { getPortfolio } from "@/lib/data";

export default async function DashboardPage() {
  const { userId } = await auth()
  const portfolioUrl = `/${userId}`;
  const portfolio = userId ? await getPortfolio(userId) : null

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Tu Portfolio</CardTitle>
            <CardDescription>Accede y comparte tu portfolio profesional</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <CopyToClipboardButton content={portfolioUrl} />
              <Link href={portfolioUrl} target="_blank" className="w-1/2">
                <Button variant="outline" className="w-full">
                  <ExternalLinkIcon className="h-4 w-4" />
                  Visitar Enlace
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Editar Portfolio</CardTitle>
            <CardDescription>Actualiza la información de tu portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/edit">
              <Button className="w-full">
                <PencilIcon className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {portfolio && (
        <div className="grid gap-6">
          <PortfolioAIChat portfolio={portfolio} />
        </div>
      )}
    </div>
  );
}