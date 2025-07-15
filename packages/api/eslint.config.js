import { config } from "@repo/eslint-config/base";

export default [
    ...config,
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
