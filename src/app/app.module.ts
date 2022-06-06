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
import { TradingCompetitionComponent } from './views/swap/trading-competition/trading-competition.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { SelectBarComponent } from './shared/select-bar/select-bar.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { PopupNavBarComponent } from './shared/popup-nav-bar/popup-nav-bar.component';
import { CardTradeComponent } from './shared/card-trade/card-trade.component';
import { CardHomepageComponent } from './shared/card-homepage/card-homepage.component';
import { CardCollectionComponent } from './shared/card-collection/card-collection.component';
import { ButtonBasicComponent } from './shared/button-basic/button-basic.component';
import { ButtonConnectComponent } from './shared/button-connect/button-connect.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SubNavBarComponent } from './core/sub-nav-bar/sub-nav-bar.component';
import { ToggleComponent } from './shared/toggle/toggle.component';
import { HomepageComponent } from './Project/homepage/homepage.component';
import { MoonComponent } from './Project/homepage/moon/moon.component';
import { LotteryTimerComponent } from './Project/homepage/moon/lottery-timer/lottery-timer.component';
import { WinComponent } from './Project/homepage/win/win.component';
import { FinishedComponent } from './views/swap/trading-competition/finished/finished.component';
import { ClockComponent } from './views/swap/trading-competition/finished/clock/clock.component';
import { ContentTextComponent } from './views/swap/trading-competition/finished/content-text/content-text.component';
import { CalcComponent } from './views/swap/trading-competition/finished/calc/calc.component';
import { ComComponent } from './views/swap/trading-competition/finished/com/com.component';
import { MessageComponent } from './views/swap/trading-competition/finished/message/message.component';
import { DetailsComponent } from './views/swap/trading-competition/finished/details/details.component';
import { TablePrizeTeamComponent } from './views/swap/trading-competition/finished/table-prize-team/table-prize-team.component';
import { StepCardComponent } from './views/lottery/step-card/step-card.component';
import { TopTradersTableComponent } from './views/swap/trading-competition/finished/top-traders-table/top-traders-table.component';
import { ConnectPopupComponent } from './modals/connect-popup/connect-popup.component';
import { FirstSectionComponent } from './views/lottery/first-section/first-section.component';
import { SecondSectionComponent } from './views/lottery/second-section/second-section.component';
import { ThirdSectionComponent } from './views/lottery/third-section/third-section.component';
import { LastSectionComponent } from './views/swap/trading-competition/finished/last-section/last-section.component';
import { RulesComponent } from './views/swap/trading-competition/finished/rules/rules.component';
import { PrizesComponent } from './views/swap/trading-competition/finished/prizes/prizes.component';
import { TopTradersComponent } from './views/swap/trading-competition/finished/top-traders/top-traders.component';
import { SectionCakeMakesComponent } from './shared/section-cake-makes/section-cake-makes.component';
import { SubMenuComponent } from './core/nav-bar/sub-menu/sub-menu/sub-menu.component';
import { EarnSectionComponent } from './Project/earn-section/earn-section/earn-section.component';
import { PatataInSecondsComponent } from './Project/homepage/patata-in-seconds/patata-in-seconds.component';
import { RankComponent } from './views/swap/trading-competition/finished/rank/rank.component';
import { SectionOneComponent } from './views/swap/trading-competition/finished/section-one/section-one.component';
import { SubRowTableComponent } from './views/farms/sub-row-table/sub-row-table.component';
import { LotteryHowtoplayComponent } from './views/lottery/lottery-howtoplay/lottery-howtoplay.component';
import { StillGotComponent } from './views/lottery/still-got/still-got.component';
import { StatsComponent } from './views/lottery/stats/stats.component';
import { CalendarComponent } from './views/lottery/calendar/calendar.component';
import { PrizeFundsComponent } from './views/lottery/prize-funds/prize-funds.component';
import { CriteriaComponent } from './views/lottery/criteria/criteria.component';
import { ParagraphComponent } from './Project/homepage/paragraph/paragraph.component';
import { TrustedCardsComponent } from './Project/homepage/trusted-cards/trusted-cards.component';
import { TrustedPComponent } from './Project/homepage/trusted-p/trusted-p.component';
import { SupplyComponent } from './Project/homepage/supply/supply.component';
import { CardComponent } from './views/liquidity/card/card.component';
import { LaterComponent } from './views/prediction/later/later.component';
import { PrizePoolComponent } from './views/prediction/prize-pool/prize-pool.component';
import { TrustedPageComponent } from './Project/homepage/trusted-page/trusted-page.component';
import { TradePageComponent } from './Project/homepage/trade-page/trade-page.component';
import { CakeComponent } from './Project/homepage/cake/cake.component';
import { CriteriaPageComponent } from './views/lottery/criteria-page/criteria-page.component';
import { PrizePageComponent } from './views/lottery/prize-page/prize-page.component';
import { LastPageComponent } from './views/lottery/last-page/last-page.component';
import { FinishPageComponent } from './views/lottery/finish-page/finish-page.component';
import { CardOwnComponent } from './views/prediction/card-own/card-own.component';
import { CentralComponent } from './views/prediction/central/central.component';
import { BnbComponent } from './views/prediction/bnb/bnb.component';
import { ClockpComponent } from './views/prediction/clockp/clockp.component';
import { CardsThreeComponent } from './views/prediction/cards-three/cards-three.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmsApiService } from './services/farms-api.service';
import { ModuleSharedModule } from './module-shared/module-shared.module';
import { FiltersBarComponent } from './views/farms/filters-bar/filters-bar.component';
import { FarmsPoolsFiltersToolbarService } from './services/farms-pools-filters-toolbar.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CardStyleComponent } from './views/farms/card-style/card-style.component';
import { TableStyleComponent } from './views/farms/table-style/table-style.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { RouterModule } from '@angular/router';
import { ChartLiquidityComponent } from './views/info/chart-liquidity/chart-liquidity.component';
import { TopTokensTableComponent } from './views/info/top-tokens-table/top-tokens-table.component';
import { TopPoolsTableComponent } from './views/info/top-pools-table/top-pools-table.component';
import { TransactionsTableComponent } from './views/info/transactions-table/transactions-table.component';
import { SearchNavigationComponent } from './views/info/search-navigation/search-navigation.component';




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
    CardHomepageComponent,
    CardCollectionComponent,
    ButtonBasicComponent,
    ButtonConnectComponent,
    FooterComponent,
    NavBarComponent,
    SubNavBarComponent,
    SubMenuComponent,
    ToggleComponent,
    HomepageComponent,

    MoonComponent,
    LotteryTimerComponent,
    WinComponent,
    FinishedComponent,
    ClockComponent,
    ContentTextComponent,
    CalcComponent,
    ComComponent,
    MessageComponent,
    DetailsComponent,
    TablePrizeTeamComponent,
    StepCardComponent,
    TopTradersTableComponent,
    ConnectPopupComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    LastSectionComponent,
    RulesComponent,
    PrizesComponent,
    TopTradersComponent,
    SectionCakeMakesComponent,
    EarnSectionComponent,
    SectionCakeMakesComponent,
    PatataInSecondsComponent,
    RankComponent,
    SectionOneComponent,
    EarnSectionComponent,
    SubRowTableComponent,
    LotteryHowtoplayComponent,
    StillGotComponent,
    StatsComponent,
    CalendarComponent,
    PrizeFundsComponent,
    CriteriaComponent,
    ParagraphComponent,
    TrustedCardsComponent,
    TrustedPComponent,
    SupplyComponent,
    CardComponent,
    LaterComponent,
    PrizePoolComponent,
    TrustedPageComponent,
    TradePageComponent,
    CakeComponent,
    CriteriaPageComponent,
    PrizePageComponent,
    LastPageComponent,
    FinishPageComponent,
    CardOwnComponent,
    CentralComponent,
    BnbComponent,
    ClockpComponent,
    CardsThreeComponent,
    SubRowTableComponent,
    FiltersBarComponent,
    SearchFilterPipe,
    CardStyleComponent,
    TableStyleComponent,
    ChartLiquidityComponent,
    TopTokensTableComponent,
    TopPoolsTableComponent,
    TransactionsTableComponent,
    SearchNavigationComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModuleSharedModule,
    InfiniteScrollModule,
    RouterModule
  ],
  providers: [
    FarmsApiService,
    FarmsPoolsFiltersToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
