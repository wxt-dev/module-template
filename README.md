<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new WXT module
- GitHub Username: your-org
- Config key: myModule
- Types: MyModule
-->

# My Module

My new Nuxt module for doing amazing things.

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Installation

Install the module to your WXT extension with one command:

```bash
pnpm i my-module
```

Then add the module to your `wxt.config.ts` file:

```ts
export default defineConfig({
  modules: ["my-module"],
})
```

That's it! You can now use My Module in your WXT extension ✨

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

</details>
