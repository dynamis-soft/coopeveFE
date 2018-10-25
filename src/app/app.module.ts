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
import { ExcelService } from './shared/services/excel.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';

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
  providers: [GlobalService, ExcelService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
