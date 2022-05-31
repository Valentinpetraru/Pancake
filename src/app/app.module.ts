import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { DocsComponent } from './views/docs/docs.component';
import { IfoComponent } from './views/ifo/ifo.component';
import { InfoComponent } from './views/info/info.component';
import { LeaderbordComponent } from './views/leaderbord/leaderbord.component';
import { VotingComponent } from './views/voting/voting.component';
import { FarmsComponent } from './views/farms/farms.component';
import { PoolsComponent } from './views/pools/pools.component';
import { ActivityComponent } from './views/activity/activity.component';
import { CollectionsComponent } from './views/collections/collections.component';
import { OverviewComponent } from './views/overview/overview.component';
import { LimitComponent } from './views/limit/limit.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { PerpetualComponent } from './views/perpetual/perpetual.component';
import { SwapComponent } from './views/swap/swap.component';
import { LotteryComponent } from './views/lottery/lottery.component';
import { PredictionComponent } from './views/prediction/prediction.component';
import { TradingCompetitionComponent } from './views/trading-competition/trading-competition.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { SelectBarComponent } from './shared/select-bar/select-bar.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { PopupNavBarComponent } from './shared/popup-nav-bar/popup-nav-bar.component';
import { CardTradeComponent } from './shared/card-trade/card-trade.component';
import { CardPredictionComponent } from './shared/card-prediction/card-prediction.component';
import { CardHomepageComponent } from './shared/card-homepage/card-homepage.component';
import { CardCollectionComponent } from './shared/card-collection/card-collection.component';
import { ButtonBasicComponent } from './shared/button-basic/button-basic.component';
import { ButtonConnectComponent } from './shared/button-connect/button-connect.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SubNavBarComponent } from './core/sub-nav-bar/sub-nav-bar.component';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { EarnSectionComponent } from './Project/earn-section/earn-section/earn-section.component';
import { SubRowTableComponent } from './views/farms/sub-row-table/sub-row-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmsApiService } from './services/farms-api.service';
import { ModuleSharedModule } from './module-shared/module-shared.module';
import { FiltersBarComponent } from './views/farms/filters-bar/filters-bar.component';
import { FarmsPoolsFiltersToolbarService } from './services/farms-pools-filters-toolbar.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CardStyleComponent } from './views/farms/card-style/card-style.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    DocsComponent,
    IfoComponent,
    InfoComponent,
    LeaderbordComponent,
    VotingComponent,
    FarmsComponent,
    PoolsComponent,
    ActivityComponent,
    CollectionsComponent,
    OverviewComponent,
    LimitComponent,
    LiquidityComponent,
    PerpetualComponent,
    SwapComponent,
    LotteryComponent,
    PredictionComponent,
    TradingCompetitionComponent,
    SettingsComponent,
    SelectBarComponent,
    SearchBarComponent,
    PopupNavBarComponent,
    CardTradeComponent,
    CardPredictionComponent,
    CardHomepageComponent,
    CardCollectionComponent,
    ButtonBasicComponent,
    ButtonConnectComponent,
    FooterComponent,
    NavBarComponent,
    SubNavBarComponent,
    ToggleComponent,
    HomepageComponent,
    EarnSectionComponent,
    SubRowTableComponent,
    FiltersBarComponent,
    SearchFilterPipe,
    CardStyleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModuleSharedModule
  ],
  providers: [
    FarmsApiService,
    FarmsPoolsFiltersToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
