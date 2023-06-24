export interface IApiResponse {

    tagData?: {
        results?: {
            uuid: string,
            name: string,
        }

    }


    count?: number,
    data?: {
        title: string,
        uuid: string,
        price: string,
    },
    results?: {
        is_employee_selected: boolean,
        price: number,
        tags: {
            uuid: string,
            name: string,
        }
        title: string,
        uuid: string,
        filter(param: (item: any) => boolean): any[];
    }
    tags?:{
        name: string,
        uuid: string,
    }

    map(element: (item: any) => JSX.Element): any;
}
