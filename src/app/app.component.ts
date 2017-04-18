import { Component }    from '@angular/core';
import { Conta }        from './conta/conta.model';
import {ListarContas} from './conta/listar.component';

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent  { 

  

  private _proximoId = 3

  private criarConta(tituloElemento:any, descricaoElemento:any, totalElemento:any)
  {
    alert('Não foi implementado ainda..')
    // this._contas.push(new Conta(
    //                     this._proximoId, 
    //                     tituloElemento.value, 
    //                     descricaoElemento.value,
    //                     totalElemento.value
    //                     )
    //                   )
    // this._selected.push(false)
    // this._proximoId++

    tituloElemento.value = ""
    descricaoElemento.value = ""
    totalElemento.value = 0
  }


  

 
}
