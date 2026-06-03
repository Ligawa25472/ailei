"use client";

import CourseLanding from "@/components/CourseLanding";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;

  return <CourseLanding courseKey={slug} />;
}
