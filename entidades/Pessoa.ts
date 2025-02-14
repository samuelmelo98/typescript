
/*

Tipos de dados no ECMAScript 5

-boolean
-number
-string
-nul/ undefined
-Array
-Object

Tipos de dados no TypeScript
-Boolean
-Number
-String
-Array
-Tuple
-Enum
-Any
-Void
-Null/Undefined

*/

/*
Ex:
-let decimal:number = 10;
-let hex: number = 0xf00d;
-let binary: number = 0b1010;
-let octal: number = 0o744;
  let list: Array<number> = [1,2,3];
let x: [string, number];
x = ["hello",10];
-enum Categoria {Desenvolvimento, Teste, test}
  let categoria: Categoria = Categoria.test;
-let notSure: any = 4;
notSure = "String text";
notSure = true;
-let typeVpoid: void = null; or undefined
 function logMessage(): void {
    console.log("Mensagem");
 }

*/

/*
Quando faz atribuição, não é obrigatório tipar.
*/

//Ex:
let valor = 10;
let valor2 = 1;
/*
Funções
*/
function somar(v1:number,v2:number):number{
    return v1 + v2;
}

function somar3(v1:(number | String),v2:number):number{
    if(v1 instanceof String){
        return v1.length + v2;
    }
    return v1 + v2;
}

function somar2(v1,v2){
    return v1 + v2;
}

console.log(somar(valor, valor2));


class Pessoa{
    nome: string;
    sobreNome: string;

    constructor(nome:string,  sobreNome:string){
        this.nome;
        this.sobreNome;
    }
        

}  

class Pessoa2 implements PessoaInterface{

/*
constructor com operador de parametros opcionais.
-?
*/
    constructor(public nome:string, 
        public sobreNome?:string, 
        private idade?:number,
        private cpf?:string,
        private endereco?:string ){
            this.nome = nome;
            this.sobreNome = sobreNome;
            this.cpf = cpf;
            this.endereco = endereco;
    
        }
        
}

let pessoa: Pessoa = new Pessoa("samuel","Melo");
console.log(pessoa);

let pessoa2: Pessoa2 = new Pessoa2("samuel");
console.log(pessoa);

