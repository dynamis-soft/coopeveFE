import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { PossibleclientComponent } from '../../possibleclient/possibleclient.component';
import { PossibleclienteditComponent } from '../../possibleclient/possibleclientedit.component';
import { ClientComponent } from '../../client/client.component';
import { ClienteditComponent } from '../../client/clientedit.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContactComponent } from '../../contact/contact.component';
import { ContacteditComponent } from '../../contact/contactedit.component';
import { OportunityComponent } from '../../opportunity/opportunity.component';
import { OpportunityeditComponent } from '../../opportunity/opportunityedit.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'possibleclient', component: PossibleclientComponent },
    { path: 'possibleclientedit/:id', component: PossibleclienteditComponent },
    { path: 'client', component: ClientComponent },
    { path: 'clientedit/:id', component: ClienteditComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactedit/:id', component: ContacteditComponent },
    { path: 'opportunity', component: OportunityComponent },
    { path: 'opportunityedit/:id', component: OpportunityeditComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];
