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
        title?: string,
        uuid?: string,
        price?: number,
        description? : string,
        files?: any[],

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
            map(element: (item: any) => JSX.Element): any;
        }

        responses?:{
            uuid: string,
            user_email: string,
            text: string,
            suggest_price: number
            map(element: (item: any) => JSX.Element): any;
        }


        tags?:{
            name: string,
            uuid: string,
        }

        map(element: (item: any) => void): any;
    }
