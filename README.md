# 🌲 @treely/forest-management

The @treely/forest-management module contains components that are used to
create feasibility studies for proposed forest based CO2 reduction projects.

## Usage

This module is intended to be used in a Next.js project and should support all
versions of Next.js that are newer than 11.0.0.

For english-only projects, it is possible to use the components directly. For
projects that need to support the german language, the `ForestManagementProvider`
component should be used to wrap the components and pass the `locale` prop.

```tsx
<ForestManagementProvider locale={"en" || "de"}>
    <Forestry config={...}>
</ForestManagementProvider>
```
