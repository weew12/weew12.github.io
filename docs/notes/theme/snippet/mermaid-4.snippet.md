---
title: mermaid-4.snippet
createTime: 2025/08/21 13:12:11
permalink: /article/w30yhynb/
---
````md
```state Check if n is negative

state if_state <<choice>>
[*] --> IsPositive
IsPositive --> if_state
if_state --> False: if n < 0
if_state --> True : if n >= 0
```
````
