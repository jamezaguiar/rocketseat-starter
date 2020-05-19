# Condicionais

Usaremos a função `retornaSexo()` como exemplo:

```javascript
function retornaSexo(sexo) {
  /*   if (sexo === 'M') {
    return 'Masculino';
  } else if (sexo === 'F') {
    return 'Feminino';
  } else {
    return 'Inválido';
  } */

  switch (sexo) {
    case 'M':
      return 'Masculino';
      break;

    case 'F':
      return 'Feminino';
      break;

    default:
      return 'Inválido';
  }
}

var resultado = retornaSexo('M');
```

Podemos utilizar a estrutura `if else` ou `switch case`
