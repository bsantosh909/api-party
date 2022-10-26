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
    deprecated: boolean;
    payment: string; // Only 'Free', 'Upgradable', 'Paid' values are acceptable
  };
}

//
export interface WikiItem extends MarkdownParsedContent {
  title: string;
  description: string;
}
