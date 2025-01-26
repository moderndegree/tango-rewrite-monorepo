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

StyleDictionary.registerTransform({
  name: "tailwind/var",
  type: "value",
  transform: (token) => {
    return `var(--${token.path.join("-")})`;
  },
});

StyleDictionary.registerFormat({
  name: "tailwind/theme",
  format: (dictionary) =>
    `@theme inline {\n${dictionary.allTokens
      .filter((token) => !token.filePath.includes("brands"))
      .map((token) => `  --${token.name}: ${token.$value || token.value};`)
      .join("\n")}\n}`,
});

function getStyleDictionaryConfig(brand, platform) {
  return {
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
            destination: `theme-${brand}.css`,
            format: cssVariables,
            options: {
              outputReferences: outputReferencesFilter,
              selector: `.theme-${brand}`,
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

["bhn", "gcc", "tango", "white-label"].map(function (brand) {
  ["web", "ios", "android"].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

const twConfig = getStyleDictionaryConfig("white-label", "web");
const twSd = new StyleDictionary({
  ...twConfig,
  platforms: {
    ...twConfig.platforms,
    web: {
      ...twConfig.platforms.web,
      transforms: ["tailwind/var"],
      files: [
        {
          ...twConfig.platforms.web.files[0],
          destination: "tailwind-theme.css",
          format: "tailwind/theme",
          options: { ...twConfig.options, selector: "@theme inline" },
        },
      ],
    },
  },
});
twSd.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
