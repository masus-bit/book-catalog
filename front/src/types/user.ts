export declare namespace User{
    namespace Create{
        interface Params{
            login: string;
            password:string;
            email:string;
            passwordConfirm:string;
        }
    }
    interface Data{
        id:number;
        login:string;
        email:string;
        enable:boolean;
        crearedAt:string;
        updatedAt:string;
    }
}