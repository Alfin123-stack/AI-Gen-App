import templates from "@/app/_utils/template";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FormTemplate from "./_components/form/FormTemplate";

interface PageProps {
  params: {
    slug: string;
  };
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const template = templates.find((t) => t.slug === params.slug);

  if (!template) {
    return {
      title: "Template Not Found | AI Content Generator",
      description: "The requested template could not be found.",
    };
  }

  return {
    title: `${template.name.en} | AI Content Generator`,
    description: template.desc.en,
    openGraph: {
      title: `${template.name.id} | AI Content Generator`,
      description: template.desc.id,
      url: `https://yourdomain.com/dashboard/${params.slug}`,
      siteName: "AI Content Generator",
      images: [
        {
          url: "https://yourdomain.com/og-template.png",
          width: 1200,
          height: 630,
          alt: template.name.en,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.name.en} | AI Content Generator`,
      description: template.desc.id,
      images: ["https://yourdomain.com/og-template.png"],
      creator: "@your_twitter",
    },
  };
}

export default function Page({ params }: PageProps) {
  const template = templates.find((t) => t.slug === params.slug);

  if (!template) {
    return notFound();
  }

  return <FormTemplate template={template} />;
}
