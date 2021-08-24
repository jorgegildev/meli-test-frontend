

export default class MeliService {

    constructor() {
        this.urlApi= `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;
        this.prefix= `api/items`;
        this.response='';
    }

    async initRequest(path, method) {
        const req = {
            url: `${this.urlApi}/${this.prefix}${path}`,
            options: {
                method: method,
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
            }
        }
        this.res = await fetch(req.url,req.options);
        return this.res.json();
    }

    async searchItems(keyword){
        return this.initRequest(`?search=${keyword}`, 'GET');
    }

    async detailItem(itemId){
        return this.initRequest(`/${itemId}`, 'GET');
    }
}
