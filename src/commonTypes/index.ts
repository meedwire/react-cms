import { ComponentContentType } from "../constants";

export interface ITabsData {
  data: { title: string; color?: string; contentId?: number }[];
}

export enum ComponetType {
  Tabs = "Tabs",
  Section = "Section",
}

export enum ContentType {
  SimpleText = "SimpleText",
  SimpleTextParagraph = "SimpleTextParagraph",
  Section = "Section",
  Tags = "Tags",
}

export interface ISectionData {
  headerTitle: string;
  content: {
    componentType: keyof typeof ComponentContentType;
    props: {
      content: string;
    };
  }[];
}

export interface ISimpleTextData {
  content: string;
}

export interface ITagsData {
  data: {
    id: string;
    title: string;
    color?: string;
  }[];
}
