import { Component,} from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
    resultados: Array<any> = []

    insereResultado(input:string, valor:string){
        this.resultados.push({"input": input, "valor": valor},)
    }

    limparHistorico(){
        this.resultados = []
    }
    
}
