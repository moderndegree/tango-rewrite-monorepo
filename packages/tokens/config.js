import StyleDictionary from "style-dictionary";
import { outputReferencesFilter } from "style-dictionary/utils";
import { isColor } from "./config/filter.js";
import { cssVarsPlugin, preset, theme } from "./config/format.js";
import { rgbChannels } from "./config/transform.js";
import { transforms } from "style-dictionary/enums";
import { register } from "@tokens-studio/sd-transforms";
import chroma from "chroma-js";

register(StyleDictionary);

StyleDictionary.registerTransform({
  name: "color/oklch",
  type: "value",
  filter: isColor,
  transform: (token) => {
    const [l, c, h, alpha] = chroma(token.$value || token.value)
      .oklch()
      .map((value) => (isNaN(value) ? "none" : Math.round(value * 100) / 100));
    return `oklch(${l} ${c} ${h}${alpha < 1 ? ` / ${alpha}` : ""})`;
  },
});

StyleDictionary.registerTransform({
  name: "color/rgb-channels",
  type: "value",
  filter: isColor,
  transform: rgbChannels,
});

StyleDictionary.registerTransformGroup({
  name: "tailwind",
  transforms: ["name/kebab", "color/rgb", "color/rgb-channels"],
});

StyleDictionary.registerFormat({
  name: "tailwind/css-vars-plugin",
  format: cssVarsPlugin,
});

StyleDictionary.registerFormat({
  name: "tailwind/theme",
  format: theme,
});

StyleDictionary.registerFormat({
  name: "tailwind/preset",
  format: preset,
});

export default {
  source: ["./tokens/**/*.json"],
  log: {
    verbosity: "verbose",
  },
  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["color/rgb", "color/rgb-channels"],
      buildPath: "dist/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          options: {
            outputReferences: outputReferencesFilter,
          },
        },
      ],
    },
    android: {
      transformGroup: "android",
      buildPath: "dist/android/",
      files: [
        {
          destination: "font_dimens.xml",
          format: "android/fontDimens",
        },
        {
          destination: "colors.xml",
          format: "android/colors",
        },
      ],
    },
    compose: {
      transformGroup: "compose",
      buildPath: "dist/compose/",
      files: [
        {
          destination: "StyleDictionaryColor.kt",
          format: "compose/object",
          options: {
            className: "StyleDictionaryColor",
            packageName: "StyleDictionaryColor",
          },
          filter: {
            $type: "color",
          },
        },
        {
          destination: "StyleDictionarySize.kt",
          format: "compose/object",
          options: {
            className: "StyleDictionarySize",
            packageName: "StyleDictionarySize",
            type: "float",
          },
          filter: {
            $type: "dimension",
          },
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "dist/ios/",
      files: [
        {
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          options: {
            className: "StyleDictionaryColor",
            type: "StyleDictionaryColorName",
          },
          filter: {
            $type: "color",
          },
        },
        {
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          options: {
            className: "StyleDictionaryColor",
            type: "StyleDictionaryColorName",
          },
          filter: {
            $type: "color",
          },
        },
        {
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          options: {
            className: "StyleDictionarySize",
            type: "float",
          },
          filter: {
            $type: "dimension",
          },
        },
        {
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          options: {
            className: "StyleDictionarySize",
            type: "float",
          },
          filter: {
            $type: "dimension",
          },
        },
      ],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "dist/ios-swift/",
      files: [
        {
          destination: "StyleDictionary+Class.swift",
          format: "ios-swift/class.swift",
          options: {
            className: "StyleDictionaryClass",
          },
        },
        {
          destination: "StyleDictionary+Enum.swift",
          format: "ios-swift/enum.swift",
          options: {
            className: "StyleDictionaryEnum",
          },
        },
        {
          destination: "StyleDictionary+Struct.swift",
          format: "ios-swift/any.swift",
          options: {
            className: "StyleDictionaryStruct",
            imports: "SwiftUI",
            objectType: "struct",
            accessControl: "internal",
          },
        },
      ],
    },
    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "dist/ios-swift/",
      files: [
        {
          destination: "StyleDictionaryColor.swift",
          format: "ios-swift/enum.swift",
          options: {
            className: "StyleDictionaryColor",
          },
          filter: {
            $type: "color",
          },
        },
        {
          destination: "StyleDictionarySize.swift",
          format: "ios-swift/enum.swift",
          options: {
            className: "StyleDictionarySize",
          },
          filter: {
            $type: "dimension",
          },
        },
      ],
    },
    tailwind: {
      transformGroup: "css",
      transforms: ["color/oklch"],
      buildPath: "dist/tailwind/",
      files: [
        {
          destination: "theme.css",
          format: "css/variables",
          options: {
            selector: "@theme inline",
            outputReferences: outputReferencesFilter,
          },
        },
      ],
    },
  },
};
