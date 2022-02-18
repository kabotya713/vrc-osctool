# vrc-osctool
VRChat用OSC設定ツール

VRChat向けのOSC送信クライアントです。
 
 
# Features
 
"hoge"のセールスポイントや差別化などを説明する
 
# Requirement
package.jsonのdependenciesを参照
 
# Installation
 
1. Node.jsのインストール
    Windows版は[こちら](https://nodejs.org/ja/download/)から
1. 依存ライブラリのインストール  
    プロジェクト直下で以下のコマンドを実行  
    ```bash
    npm install
    ```

# Usage
 
Webアプリを起動します
```bash
node ./bin/www
```

ブラウザから、`http://localhost:3000`にアクセスすると設定画面が表示されます。  
初回は、VRCのサンプルデータが読み込まれます。  
VRChatで各アバターよりOSCを有効にすると、   `~\AppData\LocalLow\VRChat\VRChat\OSC{userId}\Avatars{avatarName}_{avatarId}).`  
のディレクトリにjsonファイルができますので`public/json`配下にコピーしてください。  
`ファイルを選択`ボタンより、コピーしたjsonファイルを選択し`読込`ボタンを押すとアバター個別の設定が反映されます。

