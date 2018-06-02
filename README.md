Reactのポートフォリオの作り方を順を追って説明しています。
番号はコミットについている番号を反映しています。

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
コミットの内容通りに作って見てください

## 3. Sassを使える様にする

A. `npm run eject` もしくは　`yarn run eject`
をするとconfigを含めた色々なファイルが作成される

B. `npm install sass-loader node-sass --save-dev` もしくは　`yarn add sass-loader node-sass --save-dev`

C. あとはこの参照の通りに`webpack.config.dev.js`の中身を変えてください
How to add Sass from create-react-app
https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc

## *React等に便利なパッケージをテキストエディタ入れてみよう!

- React-Native/React/Redux snippets for es6/es7
- Bracket Pair Colorizer
- Material Icon Theme
- ESLint

## 4. HeaderとFooter Componentを作成!

- A. Componentの説明: どういう時にComponentを使うか
- B. ファイル構成の説明: どういうファイル構成が望ましいか
- C. importの説明: Componentの中にどうやってファイルを読み込むか
- D. sass説明: sass, mixin, functions, variablesが便利な理由

## 休憩？10分

## 5. 

- A. Destructuring について
- B. props と stateについて
- C. Componentsとライフサイクルについて
- D. ComponentsとFunctional Componentsについて
