import { getPortfolio } from "@/lib/data";
import { notFound } from "next/navigation";
import PDFViewer from "./viewer";

export default async function PortfolioPDFPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const portfolio = await getPortfolio(userId)

  if (!portfolio) {
    return notFound()
  }

  return <PDFViewer portfolio={portfolio} />
}