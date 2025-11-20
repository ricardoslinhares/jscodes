// ### Exercício 5: Função deepEqual Básica (Objetos Simples)

// **Descrição:** Implemente uma função que compara dois objetos recursivamente. Por enquanto, assuma que não há objetos aninhados com mais de um nível de profundidade.

function deepEqual(obj1, obj2) {
  // Implemente aqui
  // Dica: use Object.keys() e recursão
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }
  
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  return keys1.every(key => Object.hasOwn(obj2, key) && deepEqual(obj1[key], obj2[key]));
  
}

// Casos de teste:
const endereço1 = { rua: "Av. Principal", número: 123, cidade: "São Paulo" };
const endereço2 = { rua: "Av. Principal", número: 123, cidade: "São Paulo" };
const endereço3 = { rua: "Av. Principal", número: 124, cidade: "São Paulo" };

console.log(deepEqual(endereço1, endereço2)); // true
console.log(deepEqual(endereço1, endereço3)); // false
console.log(deepEqual(5, 5)); // true (primitivos funcionam)
console.log(deepEqual("teste", "teste")); // true

// // ### Exercício 4: Comparador de Estrutura

// // **Descrição:** Crie uma função que verifica se dois objetos têm as **mesmas chaves** (não importa os valores).

// function mesmasChaves(obj1, obj2) {
//   // Implemente aqui
//   const keys1 = [...Object.keys(obj1)];
//   const keys2 = [...Object.keys(obj2)];
  
//   if (keys1.length !== keys2.length) return false;
  
//   const set2 = new Set(keys2);
//   return keys1.every(key => set2.has(key));
// };

// // Casos de teste:
// const livro1 = { título: "1984", autor: "Orwell", ano: 1949 };
// const livro2 = { título: "Admirável Mundo Novo", autor: "Huxley", ano: 1932 };
// const livro3 = { título: "1984", autor: "Orwell" };

// console.log(mesmasChaves(livro1, livro2)); // true
// console.log(mesmasChaves(livro1, livro3)); // false

// function objetoVazio(obj) {
//   // Implemente aqui
//   return Object.keys(obj).length === 0;
// }

// // Casos de teste:
// console.log(objetoVazio({})); // true
// console.log(objetoVazio({ nome: "João" })); // false
// console.log(objetoVazio({ a: undefined })); // false (tem propriedade, mesmo que undefined)

// function contarPropriedadesIguais(obj1, obj2) {
//   const keys = [];
//   const allKeys = new Set([
//     ...Object.keys(obj1),
//     ...Object.keys(obj2)
//     ]);
    
//   allKeys.forEach(key => {
//     const hasBoth = Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key);
//     const areEquals = obj1[key] === obj2[key];
    
//     if (hasBoth && areEquals) {
//       keys.push(`(${key}: ${obj1[key]})`);
//     }
    
//   });
  
//   const message = () => {
//       if (keys.length === 0) return '';
//       if (keys.length === 1) return keys[0];
      
//       const start = keys.slice(0, -1).join(', ');
//       const end = keys[keys.length-1];
      
//       return `${start} e ${end}`;
//     };
  
//   return `${keys.length} (${message()})`;
// }

// // Casos de teste:
// const config1 = { tema: "claro", idioma: "pt-BR", notificações: true };
// const config2 = { tema: "escuro", idioma: "pt-BR", notificações: true };

// console.log(contarPropriedadesIguais(config1, config2)); // 2 (idioma e notificações)




// function perfilsIguais(perfil1, perfil2) {
//   // Implemente aqui
//   const keys1 = Object.keys(perfil1);
//   const keys2 = Object.keys(perfil2);
  
//   if (keys1.length !== keys2.length) {
//     return false;
//   };
  
//   return keys1.every(key =>
//     Object.hasOwn(perfil2, key) && perfil1[key] === perfil2[key]
//   );
// };

// // Casos de teste:
// const perfil1 = { username: "joao_silva", idade: 30, ativo: true };
// const perfil2 = { username: "joao_silva", idade: 30, ativo: true };
// const perfil3 = { username: "joao_silva", idade: 31, ativo: true };

// console.log(perfilsIguais(perfil1, perfil2)); // true
// console.log(perfilsIguais(perfil1, perfil3)); // false
// console.log(perfilsIguais(perfil1, perfil1)); // true (mesma referência)


// // Crie uma função que lista quais campos são DIFERENTES entre dois usuários

// const usuario1 = {
//   nome: "João",
//   email: "joao@email.com",
//   idade: 25,
//   premium: false
// };

// const usuario2 = {
//   nome: "João",
//   email: "joao.silva@email.com",  // ⬅️ Diferente
//   idade: 25,
//   premium: true                     // ⬅️ Diferente
// };

// function listarDiferenças(obj1, obj2) {
//   // Escreva aqui
//   const allKeys = new Set([
//     ...Object.keys(obj1),
//     ...Object.keys(obj2)
//     ]);
//   const result = [];
  
//   allKeys.forEach(key => {
//     if (obj1[key] !== obj2[key]) {
//       result.push(key);
//     }
//   });
//   // Deve retornar um array com os nomes dos campos que diferem
//   return result;
// };

// console.log(listarDiferenças(usuario1, usuario2));
// // Saída esperada: ["email", "premium"]




// // Crie uma função que compara se dois carros têm o mesmo modelo e ano
// const carro1 = { modelo: "Civic", ano: 2021 };
// const carro2 = { modelo: "Civic", ano: 2021 };
// const carro3 = { modelo: "Civic", ano: 2020 };

// function compare(obj1, obj2) {
//   return obj1.modelo === obj2.modelo && obj1.ano === obj2.ano;
// };

// console.log(compare(carro1, carro2)); // deve ser true
// console.log(compare(carro1, carro3)); // deve ser false

// const produtoAnterior = {
//   nome: "Notebook",
//   preco: 3000,
//   marca: "Dell",
//   cor: "prata"
// };

// const produtoAtual = {
//   nome: "Notebook",
//   preco: 2800,        // ⬅️ MUDOU
//   marca: "Dell",
//   cor: "preto"        // ⬅️ MUDOU
// };

// function checkDiff(obj1, obj2) {
//   const result = {};
  
//   const allKeys = new Set([
//     ...Object.keys(obj1),
//     ...Object.keys(obj2)
//     ]);
    
//   allKeys.forEach(key => {
//     if (obj1[key] !== obj2[key]) {
//       result[key] = {
//         before: obj1[key],
//         after: obj2[key]
//       }
//     }
//   });
//   return result;
// };

// console.log(checkDiff(produtoAnterior, produtoAtual));

// const pessoa1 = {
//   nome: "Ana",
//   endereço: {
//     cidade: "São Paulo",
//     estado: "SP"
//   }
// };

// const pessoa2 = {
//   nome: "Ana",
//   endereço: {
//     cidade: "São Paulo",
//     estado: "SP"
//   }
// };

// // console.log(JSON.stringify(pessoa1) === JSON.stringify(pessoa2));

// function areEquals(obj1, obj2) {
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
//     return obj1 === obj2;
//   }
  
//   if (obj1 === null || obj2 === null) {
//     return obj1 === obj2;
//   }
  
//   const keysObj1 = Object.keys(obj1);
//   const keysObj2 = Object.keys(obj2);
  
//   if (!keysObj1.length === keysObj2.length) {
//     return false;
//   }
  
//   return keysObj1.every(key =>
//     areEquals(obj1[key], obj2[key]));

// };

// console.log(areEquals(pessoa1, pessoa2));
