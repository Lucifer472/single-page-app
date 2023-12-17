import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

import { state_name } from "@/constant";
import { cn } from "@/lib/utils";
import { fetchUrl } from "@/lib/fetch-url";

export const revalidate = 0;

export default async function Home() {
  const url = await fetchUrl();
  if (url === null) return null;
  return (
    <main className="w-full h-full bg-slate-100 p-2">
      <section className="max-w-screen-xl mx-auto w-full bg-white shadow-md">
        <div className="p-2 xss:px-2 xss:py-4 xxs:p-4 sm:p-6 flex flex-col w-full xss:gap-2 xxs:gap-3 gap-4">
          <h1 className="w-full text-center text-lg xss:text-xl xxs:text-2xl sm:text-3xl md:text-4xl">
            सभी राज्य व्हाट्सएप ग्रुप से जुड़ें
          </h1>
          <Table>
            <TableCaption>सभी राज्य व्हाट्सएप ग्रुप से जुड़ें</TableCaption>
            <TableHeader>
              <TableRow className="bg-slate-200 hover:bg-slate-200 border border-gray-600">
                <TableHead className="sm:w-[100px] text-center text-sm xss:text-base sm:text-lg md:text-xl font-medium">
                  संख्या
                </TableHead>
                <TableHead className="text-sm xss:text-base sm:text-lg md:text-xl font-medium">
                  राज्य का नाम
                </TableHead>
                <TableHead className="text-right text-sm xss:text-base sm:text-lg md:text-xl font-medium px-2">
                  सभी व्हाट्सएप ग्रुप
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state_name.map((s, index) => (
                <TableRow
                  key={index}
                  className={cn(
                    "border-table",
                    index % 2 !== 0 ? "bg-gray-100 hover:bg-gray-100" : ""
                  )}
                >
                  <TableCell className="text-sm xss:text-base xxs:text-lg font-medium text-center">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-sm xss:text-base xxs:text-lg sm:text-xl">
                    {s}
                  </TableCell>
                  <TableCell className="px-0 xss:px-4 sm:text-right">
                    <Link
                      target="_blank"
                      className="underline text-sm xss:text-base xxs:text-lg"
                      href={url}
                    >
                      यहां क्लिक करें
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}
