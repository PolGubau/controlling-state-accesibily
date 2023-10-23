import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

export function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}
