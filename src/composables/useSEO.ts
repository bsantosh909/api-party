export const useSEO = (values: ISEOProps) => {
  const metaItems: IMetaItem[] = [];

  // Title
  metaItems.push(
    { name: "title", content: values.title },
    { name: "og:title", content: values.title },
    { name: "twitter:title", content: values.title }
  );

  // Description
  metaItems.push(
    { name: "description", content: values.description },
    { name: "og:description", content: values.description },
    { name: "twitter:description", content: values.description }
  );

  // Type of webpage
  metaItems.push({ name: "og:type", content: values.type ?? "website" });

  // URL
  if (values.url) {
    metaItems.push(
      { name: "og:url", content: values.url },
      { name: "twitter:url", content: values.url }
    );
  }

  // Image
  if (values.image) {
    metaItems.push(
      { name: "og:image", content: values.image },
      { name: "twitter:image", content: values.image }
    );
  }

  // Twitter specific
  metaItems.push({ name: "twitter:card", content: "summary" });

  //
  return metaItems;
};

interface ISEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "blog";
}

interface IMetaItem {
  name: string;
  content: string;
}
