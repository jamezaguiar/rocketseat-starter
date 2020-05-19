# Intervalo e timeout

Podemos definir intervalos para que a execução de uma função seja feita a cada determinado período de tempo

```javascript
function exibeAlgo() {
  console.log('Hello, world');
}

setInterval(exibeAlgo, 1000); // Não usamos os parêntesis ao passar o nome da função que será executada, pois queremos apenas referência-la.
```

Podemos também definir um tempo anterior a execução de uma função

```javascript
function exibeAlgo() {
  console.log('Hello, world');
}

setTimeout(exibeAlgo, 5000); // A execução da função será feita após 5000ms
```
