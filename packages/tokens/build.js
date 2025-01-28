import StyleDictionary from "style-dictionary";
import { outputReferencesFilter } from "style-dictionary/utils";
import { formats, transformGroups } from "style-dictionary/enums";
import chroma from "chroma-js";

const {
  androidColors,
  androidDimens,
  androidFontDimens,
  iosMacros,
  cssVariables,
} = formats;
const { web } = transformGroups;

StyleDictionary.registerTransform({
  name: "color/rgba",
  type: "value",
  filter: (token) => (token?.$type || token?.type) === "color",
  transform: (token) => {
    const [r, g, b, a] = chroma(token.$value || token.value)
      .rgba()
      .map((value) =>
        isNaN(value) ? "none" : Math.round(value * 1000) / 1000
      );
    return `rgba(${r} ${g} ${b}${a < 1 ? ` / ${a}` : ""})`;
  },
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    log: {
      verbosity: "verbose",
    },
    source: [
      `tokens/brands/${brand}/*.json`,
      "tokens/globals/**/*.json",
      `tokens/platforms/${platform}/*.json`,
    ],
    platforms: {
      web: {
        transformGroup: web,
        transforms: ["color/rgba"],
        buildPath: "dist/web/",
        files: [
          {
            destination: `${brand}-theme-vars.css`,
            format: cssVariables,
            options: {
              outputReferences: outputReferencesFilter,
            },
          },
          {
            destination: `${brand}-tailwind-theme.css`,
            format: cssVariables,
            options: {
              outputReferences: outputReferencesFilter,
              selector: "@theme inline",
            },
          },
        ],
      },
      android: {
        transformGroup: "android",
        buildPath: `dist/android/${brand}/`,
        files: [
          {
            destination: "tokens.colors.xml",
            format: androidColors,
          },
          {
            destination: "tokens.dimens.xml",
            format: androidDimens,
          },
          {
            destination: "tokens.font_dimens.xml",
            format: androidFontDimens,
          },
        ],
      },
      ios: {
        transformGroup: "ios",
        buildPath: `dist/ios/${brand}/`,
        files: [
          {
            destination: "tokens.h",
            format: iosMacros,
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["bhn", "gcc", "tango"].map(function (brand) {
  ["web", "ios", "android"].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
