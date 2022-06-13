import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';
import { NavMenu } from 'src/app/models/nav-bar/nav-bar-items';

import {
  SubMenu
} from '../../models/nav-bar/sub-menu';

@Component({
  selector: 'cake-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {

  @HostListener('window:click', ['$event'])
  hideLanguages($event: any): void {
    $event.stoPropagation

    const elementLang = document.querySelector('.container-earth-languages') as HTMLBodyElement;

    console.log($event.currentTarget)
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

  currencyNavBar: number = 9.222;

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
    listItems: ['Swap', 'Limit', 'Liquidy', 'Perpetual'],
    svgPattern: '../../../../../assets/nav-bar/external-sub-menu.svg',
  },

  {
    nameMenu: 'Earn',
    visibility: false,
    listItems: ['Farms', 'Pool'],
  },

  {
    nameMenu: 'Win',
    visibility: false,
    listItems: ['Trading Competition', 'Prediction Beta', 'Lottery'],
  },

  {
    nameMenu: 'NFT',
    visibility: false,
    listItems: ['Overview', 'Collections', 'Activity'],
  },

  {
    nameMenu: 'dots',
    visibility: false,
    listItems: ['Info', 'IFO', 'Voting', 'LeaderBoard', 'Blog', 'Docs'],
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

  constructor() {
    setInterval(() => {
      this.currencyNavBar += 1;
    }, 3000);


    setInterval(() => {
      this.onResize();
      this.textConnectWallet = (this.currentScreenSize <= 851) ? 'Connect' : 'Connect Wallet';
    }, 200)

  }

  ngOnInit(): void {
    this.currentScreenSize = window.innerWidth;
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


  openOverlay(): void {
    this.stateOverlayNavFooter = true;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay(event: any): void {
    if (event.target === document.querySelector('.card') as HTMLDivElement) {

    } else {
      this.stateOverlayNavFooter = false;
      document.body.style.overflow = 'visible';
    }
  }



}



