EC-site Main Web
====

## Overview

IS09 Client side ecsite-web on Angular

Document
https://angular.io/docs

## Quick Start

```bash
$ git clone --recursive git@bitbucket.org:is09ecsite/web.git
$ npm install
$ ng server --open
```

## Installation

```bash
$ npm install
```

## Server

http server that performs automatic build and page update by update detection. 
```bash
$ ng server --open
```

Must be pre-built. 
http server for production.
```
$ npm start
```

## Build

Development:
```bash
$ npm run-script build
```

Production:
```bash
$ npm run-script postinstall
```

## Git Update

```bash
$ git pull origin master
$ git submodule foreach git pull origin master
```

## Deploy

```bash
$ git push heroku master
```

## 提出状況
- 1
    - image_url   : /src/assets/group-1.png
    - site_url    : https://itoanimation.wixsite.com/home
    - name        : Shareledge
    - price       : 1000
    - overview    : 「教えて欲しい」と「誰かに教えたい」そんな気持ちをマッチング! 交流型知識共有サービス
- 2
    - image_url   : /src/assets/group-2.jpg
    - site_url    : /src/assets/page/2/index.html(https://github.com/FlareGlory/valet)
    - name        : Comeal
    - price       : 5000
    - overview    : [学校を使いこなすコミュニケーションツール]\n学食の内容や、食事の感想を言い合うアプリが満を持して登場
- 3
    - image_url   : /src/assets/group-3.png
    - site_url    : /src/assets/page/3/index.html
    - name        : 猫のぬいぐるみ
    - price       : 2000
    - overview    : マフラー、カバン、靴を身につけた手のひらサイズのアメショの猫ちゃんです。
- 4
    - image_url   : /src/assets/group-4.jpg
    - site_url    : /src/assets/page/4/converted-4han.html
    - name        : はちマイ
    - price       : 500
    - overview    : あなたの知らないスポットを探し出し、みんでシェアして一歩リード！
- 5
    - image_url   : /src/assets/group-5.gif
    - site_url    : /src/assets/page/5/index.html(https://drive.google.com/drive/folders/1hsE6KKmATF3ZGEHJ0n53ay1v-wnQkksC)
    - name        : PONTE-物々交換サービス-
    - price       : 3200
    - overview    : 「持ってても宝の持ち腐れ…」そんな物が押し入れに眠っていませんか？それ、今欲しい物と交換できるかもしれません！
- 6
    - image_url   : 
    - site_url    : 
    - name        : オーダーメイドジャージ
    - price       : 3000
    - overview    : 着心地重視の完全オーダーメイドのジャージです。ちょっとした外出や部屋着、運動用にもぜひご活用ください！
- 7
    - image_url   : /src/assets/group-7.jpg
    - site_url    : /src/assets/page/7/index.html
    - name        : 馬肉弁当
    - price       : 780
    - overview    : 長野県産の馬肉を使用した馬肉味噌煮込み弁当
- 8
    - image_url   : /src/assets/group-8.jpg
    - site_url    : /src/assets/page/8/index.html
    - name        : newstr
    - price       : 500
    - overview    : ニュースも見れるスケジュール管理アプリが登場！学校生活、就職活動で使える便利な機能が盛りだくさん！！
- 9
    - image_url   : /src/assets/group-9.jpg
    - site_url    : /src/assets/page/9/CollegeMap.html
    - name        : CollegeMap
    - price       : 480
    - overview    : 一目で分かる校内地図、ネット環境。地図の画像を決めるコンテストなど！また君だけのオリジナルのアバターを作り楽しもう！
- 10
    - image_url   : /src/assets/group-10.jpg
    - site_url    : /src/assets/page/10/index.html
    - name        : IS09カスタムアイス
    - price       : 800
    - overview    : 自分好みにおいしさ倍増！ 「ベース＋アイス＋トッピング」であなただけのアイスが作れます。

## 開発環境構築手順
1. bitbucketのアカウントを作成　
2. 作成したアカウントをbitbucket is09 group admin権限所持者に報告し、連携
3. git, node v9, npmをインストール
4. README.md Quick Startを参照

## 各チーム制作物のmockテスト方法

0. 前提としてビルドが正常に成功し`npm start`にて正常な動作が確認済み
1. `/src/assets/page/${teamId}`に各チームの制作物を追加
2. 制作物のhtmlにあるカートに追加ボタンのonclick属性に`window.top.postMessage(JSON.stringify({productId:${teamId}}), '*');`を追加(`$(teamId)`にはチームIDを入れる)
3. 商品画像は`/src/assets/group-${teamId}.{extention}`に追加
4. `README.md`の`提出状況`に変更点を記述
5. `/src/app/mock/in-memory-data.service.ts`に変更後の内容を適用
6. ブラウザにて商品一覧画面(`http://localhost:4200/`)から追加・変更したチームを選択し、正常に各チーム制作物が表示されているか確認
7. 各チーム制作物のhtmlにある「カートに追加」ボタンを押す。(この時developer-toolを表示しエラーがないか確認)
8. headerのcartボタンからカート画面(`http://localhost:4200/cart`)に移動し、カート内に商品が追加されているか確認
9. 8にて追加を確認した商品を「削除」ボタンを押した時に、正常にカートから削除されているか確認
10. 0~10の全てが確認されてからgitでremoteに変更をpush

- 使用コマンド群
  - git
  - node
  - npm
  - ng(angular)
- 実行方法

- ファイル　
    - src/assets
        - group-*.{extention}
            - チームごとの商品画像
        - page/*
            - チームごとのページhtml
    - src/app/
        - app-routing.module.ts
            - URLrouting処理
        - app.*
            - メインフレーム処理
        - list
            - リストコンポーネント
        - list-item
            - リストアイテムコンポーネント
        + cart
            - カートページコンポーネント
        + my-page
            - マイページコンポーネント
        + product-list
            - 商品一覧コンポーネント
        + product-item
            - 商品詳細コンポーネント
        + settlement
            - 決済画面コンポーネント
        + sign-in
            - サインインコンポーネント
        * mock
            - mock-server設定
        * service
            - 各サービス(model)
        * struct
            - 構造体一覧
