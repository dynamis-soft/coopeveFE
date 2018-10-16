import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { PossibleclientComponent } from '../../possibleclient/possibleclient.component';
import { PossibleclienteditComponent } from '../../possibleclient/possibleclientedit.component';
import { ClientComponent } from '../../client/client.component';
import { ClienteditComponent } from '../../client/clientedit.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserComponent } from '../../user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'possibleclient', component: PossibleclientComponent },
    { path: 'possibleclientedit/:id', component: PossibleclienteditComponent },
    { path: 'client', component: ClientComponent },
    { path: 'clientedit/:id', component: ClienteditComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: UserComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];
