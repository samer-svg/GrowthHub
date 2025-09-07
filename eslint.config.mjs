import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // Top-level ignore block
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "out/**",
      "coverage/**",
      "build/**",
      "public/**",
      "prisma/**",
      "src/generated/**",
    ],
  },

  // Your base Next.js config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Main rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/triple-slash-reference": "error",
      "react/no-unescaped-entities": "warn",
      "@next/next/no-img-element": "warn",
      quotes: "off",
      semi: "off",
      "no-console": "off",
    },
  },

  // Generated folder fallback in case some files still get picked up
  {
    files: ["src/generated/**"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
