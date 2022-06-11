import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoContainerComponent } from './info-container.component';
import { InfoComponent } from './info.component';
import { TokensComponent } from './tokens/tokens.component';
import { PoolsComponent } from './pools/pools.component';


const routes: Routes = [
    {
        path: '', component: InfoContainerComponent, children: [
            { path: 'overview', component: InfoComponent },
            { path: 'pools', component: PoolsComponent },
            { path: 'tokens', component: TokensComponent },
            { path: '', redirectTo: 'overview' },
        ]
    },
]
@NgModule({

    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class InfoRoutingModule { }