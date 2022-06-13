export interface Farm {
    token: string;
    percentage: number;
    rate: string;

}

export interface SyrupPool {
    token: string;
    percentage: number;
    rate: string;

}


export interface Trade {
    id: number
    farms?: Farm[];
    syrupPools?: SyrupPool[];
}