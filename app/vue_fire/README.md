# vue_fire

## firebaseへのデプロイ方法

1. firebaeseにログイン
    <pre>firebase login --no-localhost</pre>
1. アプリをビルド
    <pre>yarn run build</pre>
1. firebaseの初期化
    <pre>firebase init hosting</pre>
    <pre>
    ? Please select an option: Use an existing project
    ? Select a default Firebase project for this directory: vue-fire-37869 (vue-fire)
    i  Using project vue-fire-37869 (vue-fire)

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? dist
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? Set up automatic builds and deploys with GitHub? No
    ? File dist/index.html already exists. Overwrite? No
    i  Skipping write of dist/index.html
    </pre>
1. アプリをデプロイ
    <pre>firebase deploy --only hosting</pre>
1. firebaseログアウト
    <pre>firebase logout</pre>
1. 以上。