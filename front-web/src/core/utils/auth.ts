export const CLIENT_ID= "dscatalog";
export const CLIENT_SECRET="dscatalog123"

type loginResponse={
    access_token:string;
    token_type: string;
    expires_in:number;
    scope: string;
    userFirstName:string;
    userId:number
}
export const saveSessionData = (loginResponse: loginResponse)=>{
    localStorage.setItem('authDate', JSON.stringify(loginResponse))
}