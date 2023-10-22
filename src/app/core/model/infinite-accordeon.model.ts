export interface IAccordeonOption {
    id: string;
    title: string;
    isOpen: boolean;
    options: IAccordeonOption[];
}
