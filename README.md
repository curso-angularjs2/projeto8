# Aula 8 de Angular 2

Uma visão geral sobre Directives
===

Existem três tipos de Directives em Angular.

* Components - Directives com um template. Nós já criamos vários nos exemplos anteriores.
* Structural directives - Muda o layout adicionando e removendo elementos do DOM.
* Attribute directives - Muda a aparência e o comportamento de um elemento.

Vamos utilizar um exemplo simples de mudança de comportamento no DOM alterando a cor de um elemento HTML.

Primeiro vamos criar nossa Directive com o seguinte código:

* projeto8/minha.directive.ts

~~~javascript
import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[minhaDirective]'
})
export class MinhaDirective {
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  @Input('minhaDirective') corDaminhaDirective: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.mudarCor(this.corDaminhaDirective || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.mudarCor(null);
  }

  private mudarCor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

~~~

O @Directive é para que o TypeScript entenda que essa nossa classe é uma Diretive.
O @HostListener é para escutar o evento que acontecer no DOM, no caso do nosso exemplo é quando o mouse passar por cima do elemento.

O nosso template em html ficará assim:

* projeto/exemplo.html

~~~html
<h1>Minha primeira Directive</h1>
<div>
    <input type="radio" name="colors" (click)="color='lightgreen'">Verde
    <input type="radio" name="colors" (click)="color='yellow'">Amarelo
    <input type="radio" name="colors" (click)="color='blue'">Azul
</div>
<p [minhaDirective]="color">Minha directive!</p>

<p [minhaDirective]="color" [defaultColor]="'violet'">
    Minha directive com a cor default!
</p>

~~~


E em nosso módulo teremos que inserir nossa Directive:

~~~javascript 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MinhaDirective } from './minha.directive';


@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        MinhaDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

~~~

Pronto!!
Criamos uma Directive que muda o DOM de acordo com os dados que o usuário passar.