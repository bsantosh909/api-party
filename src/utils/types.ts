import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

//
export interface IRouteItem {
  name: string;
  id: string;
  path: string;
}

//
export interface ApiItem extends MarkdownParsedContent {
  name: string;
  description: string;
  features: {
    https: boolean;
  };
}
