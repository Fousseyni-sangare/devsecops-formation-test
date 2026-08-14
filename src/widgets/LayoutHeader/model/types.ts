export type Logo = {
    logoName: string;
};

export type MenuLink = {
    name: string;
    href: string;
    selected: boolean;
};

export type MenuItems = {
    links: MenuLink[];
};