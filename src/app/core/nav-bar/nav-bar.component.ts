import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { NavMenu } from 'src/app/models/nav-bar/nav-bar-items';
import { WebsocketService } from 'src/app/services/websocket.service';

import {
  SubMenu
} from '../../models/nav-bar/sub-menu';

@Component({
  selector: 'cake-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {

  connectWallet: boolean = false;
  settings: boolean = false;



  @HostListener('window:click', ['$event'])
  hideLanguages($event: any): void {
    $event.stoPropagation

    const elementLang = document.querySelector('.container-earth-languages') as HTMLBodyElement;

    // console.log($event.currentTarget)
    if ($event.target === elementLang.firstChild?.firstChild) {
      this.langState = true;
    } else {
      this.langState = false
    }


  }


  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }

  currentScreenSize!: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.currentScreenSize = window.innerWidth;
  }

  // @HostListener('window:scroll', ['$event'])
  // checkScrollPosition(): void {
  //   const currentScrollPos: number = window.pageYOffset;
  //   const prevScrollPos: number = this.scrollPos;
  //   this.scrollPos = currentScrollPos;
  //   if (prevScrollPos > currentScrollPos) {
  //     this.hideHeader = false;
  //   } else {
  //     this.hideHeader = true;
  //   }
  // }




  textConnectWallet!: string;

  tradeTokenNav!: number;

  langState: boolean = false;

  menuSelected: SubMenu[] = [];

  stateOverlayNavFooter: boolean = false;


  navMenu: NavMenu[] = [
    { iconFooterPath: '../../../../../assets/nav-bar/trade-icon-nav-footer.svg' },
    { iconFooterPath: '../../../../../assets/nav-bar/earn-icon-nav-footer.svg' },
    { iconFooterPath: '../../../../../assets/nav-bar/win-icon-nav-footer.svg' },
    { iconFooterPath: '../../../../../assets/nav-bar/tnf-icon-nav-footer.svg' },
  ]

  subMenu: SubMenu[] = [{
    nameMenu: 'Trade',
    visibility: false,
    listItems: [
      {
        itemName: 'Swap',
        routerLink: '/swap',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Limit',
        routerLink: '/limit',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Liquidity',
        routerLink: '/liquidity',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Perpetual',
        routerLink: 'perpetual',
        routerLinkActive: 'activeLinkNavigation'
      }
    ],
    svgPattern: '../../../../../assets/nav-bar/external-sub-menu.svg',

  },

  {
    nameMenu: 'Earn',
    visibility: false,
    listItems: [
      {
        itemName: 'Farms',
        routerLink: '/farms',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Pool',
        routerLink: '/pools',
        routerLinkActive: 'activeLinkNavigation'
      }
    ]

  },

  {
    nameMenu: 'Win',
    visibility: false,
    listItems: [
      {
        itemName: 'Trading Competition',
        routerLink: '/competition',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Prediction Beta',
        routerLink: '/prediction',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Lottery',
        routerLink: '/lottery',
        routerLinkActive: 'activeLinkNavigation'
      }

    ]

  },

  {
    nameMenu: 'NFT',
    visibility: false,
    listItems: [
      {
        itemName: 'Overview',
        routerLink: '/overview',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Collections',
        routerLink: 'collection',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Activity',
        routerLink: '/activity',
        routerLinkActive: 'activeLinkNavigation'
      }

    ]

  },

  {
    nameMenu: 'dots',
    visibility: false,
    listItems: [
      {
        itemName: 'Info',
        routerLink: '/info',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'IFO',
        routerLink: '/ifo',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Voting',
        routerLink: '/voting',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'LeaderBoard',
        routerLink: '/leaderboard',
        routerLinkActive: 'activeLinkNavigation'
      },
      {
        itemName: 'Blog',
        routerLink: '',
        routerLinkActive: ''
      },
      {
        itemName: 'Docs',
        routerLink: '',
        routerLinkActive: ''

      }

    ],

    svgPattern: '../../../../../assets/nav-bar/external-sub-menu.svg',
  },
  ];

  languages: Array<string> = [
    'العربية',
    'বাংলা',
    'English',
    'Deutsch',
    'Ελληνικά',
    'Español',
    'Suomalainen',
    'Filipino',
    'Français',
    'हिंदी',
    'Magyar',
    'Bahasa Indonesia',
    'Italiano',
    '日本語',
    '한국어',
    'Nederlands',
    'Polski',
    'Português (Brazil)',
    'Português',
    'Română',
    'Русский',
    'Svenska',
    'தமிழ்',
    'Türkçe',
    'Українська',
    'Tiếng Việt',
    '简体中文',
    '繁體中文',
  ];

  constructor(private websocketService: WebsocketService) {



    setInterval(() => {
      this.onResize();
      this.textConnectWallet = (this.currentScreenSize <= 851) ? 'Connect' : 'Connect Wallet';
    }, 200)

  }

  ngOnInit(): void {
    this.currentScreenSize = window.innerWidth;

    this.websocketService.subject.subscribe((data: any) => {
      this.tradeTokenNav = JSON.parse(data.p)
    })
  }

  // Show submenu on mouseEnter
  showSubMenu(item1: any): void {
    const menuItem = this.subMenu
      .find((item) => item.nameMenu === item1.textContent || item.nameMenu === item1.dataset.menu);

    this.menuSelected.push(menuItem!);

    let index = this.subMenu.indexOf(menuItem!);

    this.subMenu[index].visibility = true;



    if (this.currentScreenSize <= 576 && item1.textContent === 'Trade') {
      this.stateOverlayNavFooter = false;
      this.subMenu[index].visibility = false;

    }
  }

  // Hide submenu on mouseLeave
  hideSubMenu(item1: any): void {
    let menuItem = this.subMenu
      .find((item) => item.nameMenu === item1.textContent || item.nameMenu === item1.dataset.menu);
    let index = this.subMenu.indexOf(menuItem!);
    this.subMenu[index].visibility = false;
    this.menuSelected.pop();

    if (this.currentScreenSize <= 576 && item1.textContent != 'Trade') {
      this.stateOverlayNavFooter = false;
    }

  }

  showLanguages(): void {
    this.langState = true;
  }


  // openOverlay(): void {
  //   this.stateOverlayNavFooter = true;
  //   document.body.style.overflow = 'hidden';
  // }

  // closeOverlay(event: any): void {
  //   if (event.target === document.querySelector('.card') as HTMLDivElement) {

  //   } else {
  //     this.stateOverlayNavFooter = false;
  //     document.body.style.overflow = 'visible';
  //   }
  // }

  // Function show settings
  openSettings() {
    this.settings = !this.settings;
    document.body.style.overflow = 'hidden';
  }

  closeSettings(value: boolean) {
    this.settings = false;
    document.body.style.overflow = 'visible';
  }

  // Funzione bottone connect wallet
  openWallet(): void {
    this.connectWallet = !this.connectWallet;
    document.body.style.overflow = 'hidden';
  }

  closeWallet(value: boolean): void {
    this.connectWallet = value
    document.body.style.overflow = 'visible';
  }

}



