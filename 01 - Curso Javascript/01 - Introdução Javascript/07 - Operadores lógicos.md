# Operadores lógicos

Os operadores lógicos são AND, OR e NOT

```javascript
var sexo = 'M';
var idade = 23;

// Verifica se sexo é masculino E idade maior ou igual a 18
if (sexo === 'M' && idade >= 18) {
  console.log('OK');
}

// Verifica se sexo é masculino OU idade maior ou igual a 18
if (sexo === 'F' || idade >= 18) {
  console.log('OK');
}

// Verifica se sexo NÃO é masculino
if (sexo !== 'M') {
  console.log('OK');
}
```
