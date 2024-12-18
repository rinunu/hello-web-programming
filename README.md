This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 画面イメージ

<img width="574" alt="image" src="https://github.com/user-attachments/assets/1fcc69dc-9971-4625-8dba-fb2318ca887c" />


## 始め方

### 必要なツール

- [Docker](https://www.docker.com/)
- Node.js (例: [Volta](https://volta.sh/))
- エディタ (例: [PyCharm](https://www.jetbrains.com/pycharm/))

### コマンド

```bash
# ライブラリインストール
npm install

# DB 起動
docker compose up -d

# DB の構造を変更
npx prisma db push

# フロントエンド・バックエンド立ち上げ
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開く

## 当日お伝えしたいこと

- コマンドラインからの操作
- アプリの起動の仕方
- ツールによる DB の覗き方
- DB の変更の仕方
- アプリ画面の編集の仕方
- API の追加の仕方

## 当日やってみること
- AI とユーザーのメッセージで、見た目を変える
- メッセージの削除機能を追加する
- AI の初期プロンプトを変更する
- AI に過去のメッセージ履歴も渡す
