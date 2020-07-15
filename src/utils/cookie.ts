// @ts-ignore
import Cookies from 'js-cookie';

const Cookie = {
    invoke(name: string, value:{}, options?:{}) {
        Cookies.set(name, JSON.stringify(value), options);
    },
    retrieve(key:string){
        const cookie = Cookies.get(key);
        if (cookie === undefined) {
            return false;
        }
        return JSON.parse(cookie);
    },

    revoke(key:string) {
        Cookies.remove(key);
    }
}

export default Cookie;