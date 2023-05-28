import { createGlobalStyle } from "styled-components";

// COLORS
export const ColorPrimary = "#24292d";
export const ColorPrimaryDark = "#1f2326";
export const ColorPrimaryLightOne = "#2a2e33";
export const ColorPrimaryLightTwo = "#2f343a";
export const ColorPrimaryLightThree = "#343a40";

export const ColorSecondary = "#398775";
export const ColorSecondaryDark = "#398775";
export const ColorSecondaryLight = "#47a992";

export const ColorWhite = "#fff";
export const ColorWhiteDark = "#d6d8d9";

export const ColorBlack = "#000";
export const ColorBlackLight = "#101113";

// FONTS
export const FontSizeDefault = "1.6rem";

// Border Radius
export const BorderRadiusDefault = "2px";

// BOX SHADOWS
export const BoxShadowDefault =
  "-2px 1px 22px 5px rgba(0,0,0,0.62)";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    box-sizing: border-box;
    overflow:hidden;
  }

  a {
    text-decoration: none;
  }

  .App {
    height: 100vh;
  }
  
  ::selection {
    /* background-color: ${ColorPrimary};
    color: ${ColorWhite}; */
  }
  `;
