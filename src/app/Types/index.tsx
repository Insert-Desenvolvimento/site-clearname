export interface MenuProps {
    name: string,
    link: string,
}

export interface Text {
    text: string,
    icon: string,
    paragraph: string,
    list: string[]
}

export interface MenuListItens {
    menuItens: MenuProps[]
}

export interface ButtonEvent {
    router: string,
    name: string
}

export interface Item {
    text: string;   
}