const pessoas = [
  { nome: "Ana", idade: 25, cidade: "SP" },
  { nome: "João", idade: 17, cidade: "RJ" },
  { nome: "Maria", idade: 30, cidade: "SP" },
  { nome: "Pedro", idade: 16, cidade: "MG" }
];

const adultos = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(adultos);

const deSP = pessoas.filter(pessoa => pessoa.cidade === 'SP');
console.log(deSP);

const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];
const strLengthMaior5 = frutas.filter(fruta => fruta.length > 5);
console.log(strLengthMaior5);

const frutasComA = frutas.filter(fruta => fruta.includes('a'));
console.log(frutasComA);

console.log('================================================================');
const numeros = [5, 12, 8, 130, 44];
const primeiroMaiorQue10 = numeros.find(num => num > 10);
console.log(primeiroMaiorQue10);
const primeiroPar = numeros.find(num => num % 2 === 0);
console.log(primeiroPar);

const produtos = [
  { id: 1, nome: "Teclado", preco: 100 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Monitor", preco: 300 },
  { id: 4, nome: "Headset", preco: 150 }
];

const findProdId3 = produtos.find(prod => prod.id === 3);
console.log(findProdId3);
const findFirstProdPrecoMaior200 = produtos.find(prod => prod.preco > 200);
console.log(findFirstProdPrecoMaior200);

const nomes = ["Ana", "João", "Maria", "José", "Mariana"];

const comecaComM = nomes.find(nome => nome[0] === 'M');
console.log(comecaComM);
const primeiroNomeMaiorQue4Letras = nomes.find(nome => nome.length > 4);
console.log(primeiroNomeMaiorQue4Letras);
console.log('================================================================');

// Exercicios filter()

const alunos = [
  { nome: "Carlos", nota: 7.5, turma: "A" },
  { nome: "Julia", nota: 5.0, turma: "B" },
  { nome: "Mateus", nota: 8.0, turma: "A" },
  { nome: "Laura", nota: 6.5, turma: "C" },
  { nome: "Ricardo", nota: 4.5, turma: "B" }
];

// 1. Alunos aprovados (nota >= 6)
const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(aprovados);
// 2. Alunos da turma A
const alunosTurmaA = alunos.filter(aluno => aluno.turma === 'A');
console.log(alunosTurmaA);
// 3. Alunos com nome que começa com 'L'
const alunosComInicialL = alunos.filter(aluno => aluno.nome[0] === 'L');
console.log(alunosComInicialL);

// Exercicios find()

const estoque = [
  { produto: "Camiseta", codigo: "CT001", quantidade: 0 },
  { produto: "Calça", codigo: "CL002", quantidade: 15 },
  { produto: "Tênis", codigo: "TN003", quantidade: 8 },
  { produto: "Boné", codigo: "BN004", quantidade: 0 }
];

// 1. Primeiro produto em falta (quantidade 0)
const primeiroEmFalta = estoque.find(prod => prod.quantidade === 0);
console.log(primeiroEmFalta);
// 2. Produto com código "TN003"
const findProdById = estoque.find(prod => prod.codigo === 'TN003');
console.log(findProdById);
// 3. Primeiro produto que começa com "C"
const findFirstStartWith = estoque.find(prod => prod.produto.charAt(0) === 'C');
console.log(findFirstStartWith);

// Tudo junto e misturado
const pedidos = [
  { id: 1, cliente: "Ana", valor: 150, status: "entregue" },
  { id: 2, cliente: "João", valor: 200, status: "pendente" },
  { id: 3, cliente: "Maria", valor: 80, status: "entregue" },
  { id: 4, cliente: "Pedro", valor: 300, status: "cancelado" },
  { id: 5, cliente: "Ana", valor: 120, status: "pendente" }
];

// 1. Todos os pedidos da Ana
const ordersAna = pedidos.filter(orders => orders.cliente === 'Ana');
console.log(ordersAna);
// 2. Primeiro pedido pendente
const firstPendingOrder = pedidos.find(order => order.status === 'pendente');
console.log(firstPendingOrder);
// 3. Pedidos com valor acima de R$ 100
const OrdersGreaterThan100 = pedidos.filter(order => order.valor > 100);
console.log(OrdersGreaterThan100);

/// Desafios

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "electronics" },
  { id: 2, name: "Phone", price: 500, category: "electronics" },
  { id: 3, name: "Book", price: 20, category: "education" }
];

// Use find para encontrar um produto e depois modifique seu preço
let prodToFind = 'laptop'
let priceToUpdate = 5;
const findProd = products.find(item => item.name.toLowerCase() === prodToFind);
if (findProd) {
  console.log(`${findProd.name} price: ${findProd.price}.`);
  findProd.price = priceToUpdate;
  console.log(`Price of ${findProd.name} updated to ${findProd.price}.`);
};
// Use filter para criar uma lista só com nomes dos produtos
const prodNames = products.map(item => item.name);
console.log(prodNames);
// Filtre os produtos da categoria "electronics" e depois extraia os nomes
const electronicProds = products.filter(item => item.category === 'electronics');
const electronicNames = electronicProds.map(item => item.name);
console.log(electronicNames);
