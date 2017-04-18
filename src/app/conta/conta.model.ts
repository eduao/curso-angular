export class Conta {

    public id:number

    public titulo:string

    public descricao:string

    public total:number

    public constructor(id:number, titulo:string, descricao:string, total:number){
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.total = total
    }
}