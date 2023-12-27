---
index: false
icon: laptop-code
date: 2023-10-07
category:
  - JavaScript
---

# 数值的拓展

- `isFinite()`
- `isNaN()`
- `isInteger()`：判断数字是否为整数，点位过多时可能出现精度丢失
- `parseInt()` => `Number.parseInt()`
- `parseFloat()` => `Number.parseFloat()`
- `Number.EPSILON` === `Math.pow(2, -52)`：用于浮点数计算，设置误差范围，明确是否计算数值是否精确。
  - eg. 误差范围设为 2 的-50 次方（即`Number.EPSILON * Math.pow(2, 2)`）
