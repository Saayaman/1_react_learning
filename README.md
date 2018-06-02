## 1. まずはプロジェクトを作成してコミットしよう！

### Npmの場合

```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

*npmがない人はinstallしてください　
https://nodejs.org/en/download/package-manager/

### yarn の場合

```
$ npx create-react-app my-app
$ cd my-app
$ yarn start
```

*Yarnがない人はinstallしてください　
https://yarnpkg.com/en/docs/install#mac-stable

## 2. App.jsの中身を作成していく

## 3. Sassを使える様にする

A. `npm run eject` もしくは　`yarn run eject`
をするとconfigを含めた色々なファイルが作成される

B. `npm install sass-loader node-sass --save-dev` もしくは　`yarn add sass-loader node-sass --save-dev`

C. あとはこの参照の通りに`webpack.config.dev.js`の中身を変えてください
How to add Sass from create-react-app
https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc


