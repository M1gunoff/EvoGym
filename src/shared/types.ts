export enum SelectedPage {
    Home = 'главная',
    Benefits = 'преимущества',
    OurClasses = "группы",
    ContactUs = "контакты",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}