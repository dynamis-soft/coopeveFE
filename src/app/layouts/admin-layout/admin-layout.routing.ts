import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { PossibleclientComponent } from '../../possibleclient/possibleclient.component';
import { PossibleclienteditComponent } from '../../possibleclient/possibleclientedit.component';
import { ClientComponent } from '../../client/client.component';
import { ClienteditComponent } from '../../client/clientedit.component';
import { UserComponent } from '../../user/user.component';
import { ListComponent } from '../../user/list.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContactComponent } from '../../contact/contact.component';
import { ContacteditComponent } from '../../contact/contactedit.component';
import { OportunityComponent } from '../../opportunity/opportunity.component';
import { OpportunityeditComponent } from '../../opportunity/opportunityedit.component';
import { QuotationComponent } from '../../quotation/quotation.component';
import { QuotationeditComponent } from '../../quotation/quotationedit.component';
import { AssociatedComponent } from '../../associated/associated.component';
import { AssociatededitComponent } from '../../associated/associatededit.component';
import { IconsComponent } from '../../icons/icons.component';

import { AuthGuard } from '../../auth/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent,  canActivate: [AuthGuard] },
    { path: 'possibleclient', component: PossibleclientComponent,  canActivate: [AuthGuard] },
    { path: 'possibleclientedit/:id', component: PossibleclienteditComponent,  canActivate: [AuthGuard] },
    { path: 'client', component: ClientComponent,  canActivate: [AuthGuard] },
    { path: 'clientedit/:id', component: ClienteditComponent,  canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent,  canActivate: [AuthGuard] },
    { path: 'contactedit/:id', component: ContacteditComponent,  canActivate: [AuthGuard] },
    { path: 'opportunity', component: OportunityComponent,  canActivate: [AuthGuard] },
    { path: 'opportunityedit/:id', component: OpportunityeditComponent,  canActivate: [AuthGuard] },
    { path: 'quotation', component: QuotationComponent,  canActivate: [AuthGuard] },
    { path: 'quotationedit/:id', component: QuotationeditComponent,  canActivate: [AuthGuard] },
    { path: 'associated', component: AssociatedComponent,  canActivate: [AuthGuard] },
    { path: 'associatededit/:id', component: AssociatededitComponent,  canActivate: [AuthGuard] },
    { path: 'icons', component: IconsComponent,  canActivate: [AuthGuard] },
    { path: 'upgrade', component: UpgradeComponent,  canActivate: [AuthGuard] },
    { path: 'list', component: ListComponent,  canActivate: [AuthGuard] },
    { path: 'user/:id', component: UserComponent,  canActivate: [AuthGuard] },
];
