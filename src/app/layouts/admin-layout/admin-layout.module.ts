import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PossibleclientComponent } from '../../possibleclient/possibleclient.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PossibleclienteditComponent } from '../../possibleclient/possibleclientedit.component';
import { ClientComponent } from '../../client/client.component';
import { ClienteditComponent } from '../../client/clientedit.component';
import { ContactComponent } from '../../contact/contact.component';
import { ContacteditComponent } from '../../contact/contactedit.component';
import { OportunityComponent } from '../../opportunity/opportunity.component';
import { OpportunityeditComponent } from '../../opportunity/opportunityedit.component';
import { QuotationComponent } from '../../quotation/quotation.component';
import { QuotationeditComponent } from '../../quotation/quotationedit.component';
import { AssociatedComponent } from '../../associated/associated.component';
import { AssociatededitComponent } from '../../associated/associatededit.component';
import { ListComponent } from '../../user/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PossibleclientComponent,
    PossibleclienteditComponent,
    ClientComponent,
    ClienteditComponent,
    ContactComponent,
    ContacteditComponent,
    OportunityComponent,
    OpportunityeditComponent,
    QuotationComponent,
    QuotationeditComponent,
    AssociatedComponent,
    AssociatededitComponent,
    ListComponent
  ]
})

export class AdminLayoutModule {}
