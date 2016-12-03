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
