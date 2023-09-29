# OperationClass

The OperationClass component calculates the absolute and relative area, the site productivity,
the normal stock for each specie and the yield table that corresponds to the given specie.

## Input

- `rotationPeriod`: The rotation period in years.
- `listOfSpecies`: A list of species with their site productivity (Bonität) and respective area
  in hectares or in percent.

## Output

- Yield table (Ertragstafel): A link to the yield table that corresponds to the given specie.
- Area (Fläche): The total area in hectares for each specie.
- Area distribution (Flächenverteilung): The relative area in percent for each operation class.
- Site productivity (Bonität): The site productivity for each specie.
- Normal stock (Normalvorrat): The normal stock in Vfm per hectare for each specie.
