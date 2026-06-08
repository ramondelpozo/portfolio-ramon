import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { getHomeJsonLd, homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />
      <HomePage />
    </>
  );
}
