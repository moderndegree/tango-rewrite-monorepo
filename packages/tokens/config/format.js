import { isColor } from "./filter.js";

const setDeepProperty = (obj, path, value) => {
  const keys = path.split(".");
  const lastKey = keys.pop();
  const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
  const result = deepClone(obj);
  let current = result;
  keys.forEach((key) => {
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  });
  current[lastKey] = value;
  return result;
};

/**
 * Exports tailwind plugin for declaring root CSS vars
 * @see https://tailwindcss.com/docs/plugins#overview
 */
export function cssVarsPlugin({ dictionary }) {
  const vars = dictionary.allTokens
    .map((token) => {
      let value = token?.$value || token?.value;
      if (/\{.*?\}/.test(token.original.$value)) {
        const original = dictionary.allTokens.find(
          (t) => t.key === token.original.$value
        );
        if (original) {
          value = `var(--${original.name})`;
        }
      }
      return `'--${token.name}': '${value}'`;
    })
    .join(",\n\t\t\t");

  return `import plugin from 'tailwindcss/plugin.js';

export default plugin(function ({ addBase }) {
\taddBase({
\t\t':root': {
\t\t\t${vars},
\t\t},
\t});
});\n`;
}

/**
 * Exports theme definitions
 * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
 */
export function theme({ dictionary }) {
  const colors = dictionary.allTokens.reduce((acc, token) => {
    return setDeepProperty(
      acc,
      token.path.join("."),
      isColor(token) ? `rgb(var(--${token.name}))` : `var(--${token.name})`
    );
  }, {});

  return JSON.stringify(colors, null, 2);
}

/**
 * Exports tailwind preset
 * @see https://tailwindcss.com/docs/presets
 */
export function preset() {
  return `import theme from './theme.json';
import cssVarsPlugin from './cssVarsPlugin.js';

export default {
\ttheme: {
\t\textend: {
\t\t\t...theme,
\t\t},
\t},
\tplugins: [cssVarsPlugin], // <-- plugin imported here
};\n`;
}
