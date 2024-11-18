export interface MenuProps {
    name: string,
    link: string,
}

export interface Text {
    text: string,
    icon: string,
    paragraph: string,
}

export interface MenuListItens {
    menuItens: MenuProps[]
}

export interface ButtonEvent {
    router: string,
    name: string
}
