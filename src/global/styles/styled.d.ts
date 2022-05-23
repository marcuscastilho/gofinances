import "styled-components";
import { BaseTheme } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof BaseTheme;

  export interface DefaultTheme extends ThemeType {}
}
