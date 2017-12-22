import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        {
            id          : 1,
            image_url   : 'http://localhost:8080/group-1.png',
            site_url    : 'https://itoanimation.wixsite.com/home',
            name        : 'Shareledge',
            price       : 1000,
            overview    : '「教えて欲しい」と「誰かに教えたい」そんな気持ちをマッチング! 交流型知識共有サービス',
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
            overview    : '3班の商品詳細がまだ決まっていないので仮置きの文章です。',
            created_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 03 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 4,
            image_url   : 'http://localhost:8080/group-4.jpg',
            site_url    : 'http://localhost:8080/page/4/converted-4han.html',
            name        : 'team4 product name',
            price       : 4000,
            overview    : 'あなたの知らないスポットを探し出し、みんでシェアして一歩リード！',
            created_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)',
            updated_date: 'Thu Dec 04 2017 21:27:49 GMT+0900 (JST)'
        },
        {
            id          : 5,
            image_url   : 'http://localhost:8080/group-5.gif',
            site_url    : 'http://localhost:8080/page/5/index.html',
            name        : 'PONTE-物々交換サービス-',
            price       : 3200,
            overview    : '「持ってても宝の持ち腐れ…」そんな物が押し入れに眠っていませんか？それ、今欲しい物と交換できるかもしれません！',
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
            image_url   : 'http://localhost:8080/group-8.jpg',
            site_url    : 'http://localhost:8080/page/8/index.html',
            name        : 'newstr',
            price       : 500,
            overview    : 'ニュースも見れるスケジュール管理アプリが登場！学校生活、就職活動で使える便利な機能が盛りだくさん！！',
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
            image_url   : 'http://localhost:8080/group-10.jpg',
            site_url    : 'http://localhost:8080/page/10/index.html',
            name        : 'IS09カスタムアイス',
            price       : 800,
            overview    : '自分好みにおいしさ倍増！ 「ベース＋アイス＋トッピング」であなただけのアイスが作れます。',
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
