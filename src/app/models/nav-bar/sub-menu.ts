
export interface RouterLink {
  itemName?: string;
  routerLink?: string;
  routerLinkActive?: string;
}

export interface SubMenu {
  nameMenu: string;
  visibility: boolean;
  listItems: RouterLink[];
  svgPattern?: string;

}
