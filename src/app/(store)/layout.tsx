"use client";
import { ProviderCart } from "@/data/contexts/contextCart";

export default function Layout({ children }: any) {
  return (
    <ProviderCart className="border border-blue-500">{children}</ProviderCart>
  );
}
