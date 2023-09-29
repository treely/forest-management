# CalculateCurrentStock

The CalculateCurrentStock component allows you to determine the average increment per
year, average harvest amount per year, stock in the year of inventory, and current
stock. Additionally, it handles edge cases where one year of harvest amounts is missing
between the two points in time.

## Input

- `config`: A object of type `FeasibilityConfig`

## Output

- Average increment per year (Durchschnittlicher Zuwachs pro Jahr): This metric represents
  the average annual increment in volume in Vfm per hectare.
- Average harvest amount per year (Durchschnittlicher Einschlag pro Jahr): This metric
  calculates the average annual harvest amount in Efm (cubic meters).
- Stock in the year of inventory: The volume in Vfm per hectare for the specified "Current"
  year.
- Current stock: The calculated current stock in volume, considering the initial stock,
  yearly increment, and harvest data up to the "Current" year.

## Edge Cases

The CalculateCurrentStock component is designed to handle edge cases, specifically
when one year of harvest amounts is missing between the two points in time. It will
accurately reflect this scenario in the output, ensuring transparency and data accuracy.
