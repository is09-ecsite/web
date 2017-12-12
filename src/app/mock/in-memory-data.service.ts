import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        {
            id          : 1,
            image_url   : 'http://placehold.jp/500x300.png?text=1',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team1 product name',
            price       : 1000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 2,
            image_url   : 'http://placehold.jp/500x300.png?text=2',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team2 product name',
            price       : 2000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 3,
            image_url   : 'http://placehold.jp/500x300.png?text=3',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team3 product name',
            price       : 3000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 4,
            image_url   : 'http://placehold.jp/500x300.png?text=4',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team4 product name',
            price       : 4000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 5,
            image_url   : 'http://placehold.jp/500x300.png?text=5',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team5 product name',
            price       : 5000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 6,
            image_url   : 'http://placehold.jp/500x300.png?text=6',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team6 product name',
            price       : 6000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 7,
            image_url   : 'http://placehold.jp/500x300.png?text=7',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team7 product name',
            price       : 7000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 8,
            image_url   : 'http://placehold.jp/500x300.png?text=8',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team8 product name',
            price       : 8000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 9,
            image_url   : 'http://placehold.jp/500x300.png?text=9',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team9 product name',
            price       : 9000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 10,
            image_url   : 'http://placehold.jp/500x300.png?text=10',
            site_url    : 'http://blackrockdigital.github.io/startbootstrap-creative/',
            name        : 'team10 product name',
            price       : 10000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        }
    ];
    return {products};
  }
}
