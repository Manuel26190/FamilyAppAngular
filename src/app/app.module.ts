import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './family-component/family.component';
import { LuluArrayComponent } from './lulu-array-component/lulu-array.component';
import { WeekCardComponent } from './week-card-component/week-card.component';
import { FormsModule } from '@angular/forms';
import { AngularHeaderComponent } from './angular-header-component/angular-header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    LuluArrayComponent,
    WeekCardComponent,
    AngularHeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
