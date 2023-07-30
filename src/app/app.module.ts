import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms"; // for [(ngModel)]
import { ComponentsModule } from "./modules/components.module";
import { PagesModule } from "./modules/pages.module";
import { DirectivesModule } from "./modules/directives.module";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
     imports: [
          DirectivesModule,
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          BrowserAnimationsModule,
          FormsModule,
          ComponentsModule,
          PagesModule,
          MatIconModule,
     ],
     declarations: [AppComponent],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
