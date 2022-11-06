This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Web3twitter-Mock
- 使用したtech stacks: 
  - フロント:
    - 言語：TypeScript
    - ライブラリ：React
    - フレームワーク：Next.js
  - スマートコントラクト
    - 言語：Solidity
    - 開発環境：Hardhat

- 使用したBlockchain：Ethereum (Goerli)
- deployしたContract(ExplorerでOK)
  - [link](https://goerli.etherscan.io/address/0xC0D507226e73e4bCeED5a46F35cF07c1b7C9f077)
  - Address：0xC0D507226e73e4bCeED5a46F35cF07c1b7C9f077
- application codeやその他のfile
- テスト手順を含むリポジトリへのリンク
  - Please check this repository, [smart contracts](https://github.com/matsutakk/SecureDataCollect-), [frontend1](https://github.com/matsutakk/web3youtube). 
  - Also our video include the information of screen transition

- 審査やテストのためにプロジェクトにアクセスする方法など
  - https://web3youtube.vercel.app/
  - https://web3youtube-pc3i.vercel.app/
  

## 概要
ユーザーはログイン後、視聴履歴に基づいたコンテンツ表示最適化に同意をすると、最適化された順番でtweetを見ることができる。
