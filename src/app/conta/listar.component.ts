import {Component} from '@angular/core';
import {Conta} from './conta.model';

@Component({
    selector: 'contas-listar',
    templateUrl: 'app/conta/listar.component.html',
    styleUrls: ['app/conta/listar.component.css']
})

export class ListarContas 
{
    private _selected:Array<boolean> = [false,false]

    private _contas:Array<Conta> = [
        {
            id:1,
            titulo:"BB",
            descricao:"Conta principal",
            total:500
        },
        {
            id:2,
            titulo:"neon",
            descricao:"conta 2",
            total:100
        }

    ]

    private select(index:number){
        this._selected[index] = !this._selected[index]
    }

    private removerConta(index:number)
    {
        this._contas.splice(index, 1)

        this._selected.splice(index+1, 1)
    }
}
