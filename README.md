# 🌲 @treely/forest-management

The @treely/forest-management module contains components that are used to
calculate key parameters for the management of forests.

## Usage

This module is intended to be used in a Next.js project and should support all
versions of Next.js that are newer than 11.0.0.

It is nessacary to wrap the components in the `ForestManagementProvider` component.
Projects that need to support the german language can set the `locale` prop to `de`.
If you are also using `@chakra-ui/react` or `boemly`, make sure to have `ChakraProvider`
or `BoemlyThemeProvider` as a _child_ of `ForestManagementProvider`.

```tsx
<ForestManagementProvider locale={"en" || "de"}>
    <Forestry config={...}>
</ForestManagementProvider>
```

## Components

- [CalculateCurrentStock](./src/components/CalculateCurrentStock)
- [Forestry](./src/components/Forestry)
- [OperationClass](./src/components/OperationClass)
- [OperationClasses](./src/components/OperationClasses)
