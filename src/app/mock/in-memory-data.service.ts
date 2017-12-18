import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        {
            id          : 1,
            image_url   : 'http://placehold.jp/500x300.png?text=1',
            site_url    : 'https://itoanimation.wixsite.com/home',
            name        : 'team1 product name',
            price       : 1000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 01 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 2,
            image_url   : 'http://localhost:8080/group-2.jpg',
            site_url    : 'http://localhost:8080/page/2/index.html',
            name        : 'Comeal',
            price       : 2000,
            overview    : '[学校を使いこなすコミュニケーションツール]\n学食の内容や、食事の感想を言い合うアプリが満を持して登場',
            created_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 02 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 3,
            image_url   : 'http://placehold.jp/500x300.png?text=3',
            site_url    : 'http://localhost:8080/page/3/index.html',
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
            image_url   : 'http://localhost:8080/group-5.gif',
            site_url    : 'http://localhost:8080/page/5/index.html',
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
            image_url   : 'http://localhost:8080/group-7.jpg',
            site_url    : 'http://localhost:8080/page/7/index.html',
            name        : '馬肉弁当',
            price       : 780,
            overview    : '長野県産の馬肉を使用した馬肉味噌煮込み弁当',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 8,
            image_url   : 'http://placehold.jp/500x300.png?text=8',
            site_url    : 'http://localhost:8080/page/8/index.html',
            name        : 'team8 product name',
            price       : 8000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 9,
            image_url   : 'http://localhost:8080/group-9.jpg',
            site_url    : 'http://localhost:8080/page/9/index.html',
            name        : 'CollegeMap',
            price       : 9000,
            overview    : '一目で分かる校内地図、ネット環境。地図の画像を決めるコンテストなど！また君だけのオリジナルのアバターを作り楽しもう！',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 10,
            image_url   : 'http://placehold.jp/500x300.png?text=10',
            site_url    : 'http://localhost:8080/page/10/index.html',
            name        : 'team10 product name',
            price       : 10000,
            overview    : 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん１２３４５６７８９０おわり',
            created_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 05 2017 21:27:49 GMT+0900 (JST)'
        }
    ];


    const auth = {
        token: "test-token"
    }
    
    return {products, auth};
  }
}
