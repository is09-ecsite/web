import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        {
            id          : 1,
            image_url   : 'http://placehold.jp/500x400.png?text=1',
            name        : 'team1',
            price       : 1000,
            overview    : 'teme 1 product',
            created_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 2,
            image_url   : 'http://placehold.jp/500x400.png?text=2',
            name        : 'team2',
            price       : 2000,
            overview    : 'teme 2 product',
            created_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 3,
            image_url   : 'http://placehold.jp/500x400.png?text=3',
            name        : 'team3',
            price       : 3000,
            overview    : 'teme 3 product',
            created_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 4,
            image_url   : 'http://placehold.jp/500x400.png?text=4',
            name        : 'team4',
            price       : 4000,
            overview    : 'teme 4 product',
            created_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 5,
            image_url   : 'http://placehold.jp/500x400.png?text=5',
            name        : 'team5',
            price       : 5000,
            overview    : 'teme 5 product',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        }
    ];
    return {products};
  }
}
