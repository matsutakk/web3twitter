## プロジェクト概要
ユーザーのコンテンツ視聴履歴を、プライバシーを守りながらweb3 social media間で共有し合うためのプロトコル。現状のweb3 social 構築protocol（ex lens、cyberconnect）は、公開しても問題ないユーザー情報をNFT化したりしてportableにしていたが、公開したくない情報もある。そういう非公開情報のなかにはユーザーの趣味趣向を鮮明に写すもの（ex視聴履歴、ブックマーク）がある。
さて、現状のweb3 socia medialはnetworking としての価値が高いが、今後さらに発展していく上ではコンテンツ体験としての価値が重要になると考えられる。そのためには既存のweb2プラットフォーマーとは違うコンテンツ体験を届けられるような、推薦アルゴリズムを構築するためのデータが必要である。priva3はdapps間を横断して非公開ユーザー情報を集めることで、web2ではなしえないユーザーの趣味趣向に対する理解を実現し、全く違うコンテンツ体験を届ける。

## Web3twitter-Mock
- 使用したtech stacks: 
  - 準同型暗号
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
