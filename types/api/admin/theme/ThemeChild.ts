import { Theme } from "./Theme";

export interface ThemeChild {
  id?: string;
  parentId: string;
  childId: string;
  parentTheme?: Theme;
  childTheme?: Theme;
}