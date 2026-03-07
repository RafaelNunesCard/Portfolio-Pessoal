// Partial: Torna todos os campos opcionais
interface Pessoa {
  nome: string
  idade: number
}

let User: Partial<Pessoa> = {
  nome: "Rafael"
}

// Pick: Seleciona apenas alguns campos.
interface Usuario1 {
  id: number
  nome: string
  email: string
}

type UsuarioPublico = Pick<Usuario1, "nome" | "email"> 
/*
{
 nome: string
 email: string
}
*/
// Omit: Remove campos.
type UsuarioSemId = Omit<Usuario1, "id">
/*
{
 nome: string
 email: string
}
*/
// Record: Criar objeto baseado em chave e valor.
type Usuarios = Record<string, number>;
/*
{
 "Rafael": 20,
 "Ana": 22
}
*/
// Readonly: Torna dados imutáveis.
interface ProdutoEx {
  nome: string
  preco: number
}

let p: Readonly<ProdutoEx> = {
  nome: "Notebook",
  preco: 3000
}