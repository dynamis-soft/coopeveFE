import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { GlobalService } from './shared/services/global.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
