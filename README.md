# 🌲 Tree.ly forest management components

The `@treely/forest-management` module contains components that are used to
calculate key parameters for the management of forests.

## Usage

This module is intended to be used in a Next.js project and should support all
versions of Next.js that are newer than 11.0.0.

It is necessary to wrap the components in the `ForestManagementProvider` component.
Projects that need to support the german language can set the `locale` prop to `de`.
If you are also using `@chakra-ui/react` or `boemly`, make sure to have `ChakraProvider`
or `BoemlyThemeProvider` as a _child_ of `ForestManagementProvider`.

```tsx
<ForestManagementProvider locale={"en" || "de"}>
    <Forestry config={...}>
</ForestManagementProvider>
```

## Docs

Find the documentation [here](https://forest-management.vercel.app).

## Development

### Install dependencies

```bash
npm install
```

### Run storybook

```bash
npm run storybook
```

### Run tests

```bash
npm test
```

### Run linter

```bash
npm run lint
```
