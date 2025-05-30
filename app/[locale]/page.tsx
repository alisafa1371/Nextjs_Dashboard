import { redirect } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const param = await params;
  redirect(`/${param.locale}/dashboard`);
}
