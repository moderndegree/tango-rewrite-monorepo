import StyleDictionary from "style-dictionary";
import { isColor } from "./config/filter.js";
import { cssVarsPlugin, preset, themeColors } from "./config/format.js";
import { rgbChannels } from "./config/transform.js";

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
  name: "tailwind/theme-colors",
  format: themeColors,
});

StyleDictionary.registerFormat({
  name: "tailwind/preset",
  format: preset,
});

export default {
  source: ["./tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
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
    tailwindPreset: {
      buildPath: "dist/tailwind/",
      transformGroup: "tailwind",
      files: [
        {
          destination: "cssVarsPlugin.js",
          format: "tailwind/css-vars-plugin",
        },
        {
          destination: "themeColors.js",
          format: "tailwind/theme-colors",
        },
        {
          destination: "preset.js",
          format: "tailwind/preset",
        },
      ],
    },
  },
};
