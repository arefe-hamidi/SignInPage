"use client";
import { AuthLayout } from "@/Components/Layout/AuthLayout";

interface iProps {
  children: React.ReactNode;
}

export default function Layout({ children }: iProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
