/**
 * Dado um vetor de objetos, escreva uma função que mostre as habilidades de um determinado usuário
 */
var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux'],
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'],
  },
];

//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

for (const usuario of usuarios) {
  console.log(
    `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`
  );
}
