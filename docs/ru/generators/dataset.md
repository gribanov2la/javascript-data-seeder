# Dataset

Позволяет генерировать данные из любого пользовательского набора.

## Базовое использование
```javascript
import {generators} from 'jseeder';

generators.dataset({data: ['female', 'male']})
```


## Установка "весов"
```javascript
import {generators, collection} from 'jseeder';

generators.dataset({data: ['female', 'male'], weights: [100, 1]})
```
