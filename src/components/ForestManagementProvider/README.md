# ForestManagementProvider

Wraps all components that need access to the shared contexts for internationalization
and linking to the forest-docs site.

## Input

- `locale`: The locale to use for internationalization, either `de` or `en`, defaults
  to English.
- `forestDocsBaseUrl`: The base url of the forest-docs site. All links to the forest-docs
  site will be prefixed with this url. Defaults to [forest-docs.tree.ly](https://forest-docs.tree.ly).
  An empty string can be used to link relative to the current URL.

## Provides

- `IntlContext`: The imperative API for internationalization in the form of `react-intl`'s `IntlShape`.
- `ForestDocsContext`: The base url that is used when linking to the forest-docs site.
