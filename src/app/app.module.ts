import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroductionPage } from '../pages/introduction/introduction';
import { IntroductionsPage } from '../pages/introductions/introductions';
import { DefinitionPage } from '../pages/definition/definition';
import { DefinitionfPage } from '../pages/definitionf/definitionf';
import { DefinitionsPage } from '../pages/definitions/definitions';
import { TypesPage } from '../pages/types/types';
import { MonyPage } from '../pages/mony/mony';
import { AnimalsPage } from '../pages/animals/animals';
import { SeedsPage } from '../pages/seeds/seeds';
import { TradingPage } from '../pages/trading/trading';
import { MetalsPage } from '../pages/metals/metals';
import { StocksPage } from '../pages/stocks/stocks';
import { EarthPage } from '../pages/earth/earth';
import { AlfitrPage } from '../pages/alfitr/alfitr';
import { AhkamPage } from '../pages/ahkam/ahkam';
import { CharityPage } from '../pages/charity/charity';
import { ZakatoligationPage } from '../pages/zakatoligation/zakatoligation';
import { RulingonzakatPage } from '../pages/rulingonzakat/rulingonzakat';
import { TreasurePage } from '../pages/treasure/treasure';
import { LogicalPage } from '../pages/logical/logical';
import { GoldPage } from '../pages/gold/gold';
import { SilverPage } from '../pages/silver/silver';
import { BanknotesPage } from '../pages/banknotes/banknotes';
import { EvidencePage } from '../pages/evidence/evidence';
import { ConditionsPage } from '../pages/conditions/conditions';
import { CamelPage } from '../pages/camel/camel';
import { CowPage } from '../pages/cow/cow';
import { SheepPage } from '../pages/sheep/sheep';
import { HorsePage } from '../pages/horse/horse';
import { YoungPage } from '../pages/young/young';
import { DebtPage } from '../pages/debt/debt';
import { BadPage } from '../pages/bad/bad';
import { WifePage } from '../pages/wife/wife';
import { CountryPage } from '../pages/country/country';
import { ProjectionPage } from '../pages/projection/projection';
import { DebtorPage } from '../pages/debtor/debtor';
import { TaxesPage } from '../pages/taxes/taxes';
import { AcceleratingPage } from '../pages/accelerating/accelerating';
import { DelayPage } from '../pages/delay/delay';
import { RichPage } from '../pages/rich/rich';
import { AdMobFree } from '@ionic-native/admob-free';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdsProvider } from '../providers/ads/ads';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroductionPage,
    IntroductionsPage,
    DefinitionPage,
    DefinitionfPage,
    DefinitionsPage,
    TypesPage,
    MonyPage,
    AnimalsPage,
    SeedsPage,
    TradingPage,
    MetalsPage,
    StocksPage,
    EarthPage,
    AlfitrPage,
    AhkamPage,
    CharityPage,
    ZakatoligationPage,
    RulingonzakatPage,
    TreasurePage,
    LogicalPage,
    GoldPage,
    SilverPage,
    BanknotesPage,
    EvidencePage,
    ConditionsPage,
    CamelPage,
    CowPage,
    SheepPage,
    HorsePage,
    YoungPage,
    DebtPage,
    BadPage,
    WifePage,
    CountryPage,
    ProjectionPage,
    DebtorPage,
    TaxesPage,
    AcceleratingPage,
    DelayPage,
    RichPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      prodMode: true
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroductionPage,
    IntroductionsPage,
    DefinitionPage,
    DefinitionfPage,
    DefinitionsPage,
    TypesPage,
    MonyPage,
    AnimalsPage,
    SeedsPage,
    TradingPage,
    MetalsPage,
    StocksPage,
    EarthPage,
    AlfitrPage,
    AhkamPage,
    CharityPage,
    ZakatoligationPage,
    RulingonzakatPage,
    TreasurePage,
    LogicalPage,
    GoldPage,
    SilverPage,
    BanknotesPage,
    EvidencePage,
    ConditionsPage,
    CamelPage,
    CowPage,
    SheepPage,
    HorsePage,
    YoungPage,
    DebtPage,
    BadPage,
    WifePage,
    CountryPage,
    ProjectionPage,
    DebtorPage,
    TaxesPage,
    AcceleratingPage,
    DelayPage,
    RichPage
    

  ],
  providers: [
    StatusBar,
    AdMobFree,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdsProvider
  ]
})
export class AppModule {}
