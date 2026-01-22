# Arrays

## Complexity Analysis

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Access | O(1) | O(1) |
| Search | O(n) | O(n) |
| Insert | O(n) | O(n) |
| Delete | O(n) | O(n) |
| Push | O(1)* | O(n) |
| Pop | O(1) | O(1) |

*Amortized time complexity

## Key Concepts

- Contiguous memory allocation
- Random access via index
- Dynamic resizing (doubling strategy)

## Implementation Notes

- Track both length and capacity
- Resize when length equals capacity
- Consider shrinking when length < capacity/4
