import { RESTDataSource } from 'apollo-datasource-rest';
import keys from '../environment';

export default class NyDataSource extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = ' https://api.nytimes.com/svc/books/v3/';
    }

    willSendRequest(request) {
        console.log('calling ny-api with url', JSON.stringify(request));
    }

    fetchList () {
        return this.get('lists/best-sellers/history.json', {'api-key': keys.apiKey} );
    }


}