import { Component, ViewChild } from '@angular/core';
import { ValidacaoService } from 'src/app/validacao.service';
import { HistoricoComponent } from '../historico/historico.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
    constructor(private validacao:ValidacaoService) {
    }
    public resultado:string = ' ';
    public inputResultado:string = ' ';
    public valorResultado:string = ' ';
 
    @ViewChild(HistoricoComponent, {static: true}) historico?: HistoricoComponent

    public preencheResultado(caractere:string){
        if(this.validacao.ehValidaExpressao(caractere, this.resultado)){
        this.resultado += caractere;
        }
    }

    public limpar(){
        this.resultado=" ";
    }

    public apagar(){
        this.resultado=this.resultado.substring(0, this.resultado.length - 1);
        if (this.resultado.length == 0){
        this.resultado=" ";
        }
    }

    public avaliaResultado(){
        // limpar o espaço vazio
        this.resultado = this.resultado.replace(/\s/g, '')
        this.inputResultado = this.resultado
        let soma: number = 0
        let vetorNumeros = this.resultado.split("+")
            vetorNumeros.forEach(e => {
            soma += parseInt(e, 2);
        });
        this.resultado = parseInt(soma.toString(), 10).toString(2);
        this.valorResultado = this.resultado
        this.historico?.insereResultado(this.inputResultado, this.valorResultado)

        this.resultado = " ";
    }
}
