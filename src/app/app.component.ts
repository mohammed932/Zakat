import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';

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
import { AhkamPage} from '../pages/ahkam/ahkam';
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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
