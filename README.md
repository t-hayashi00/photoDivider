# photoDivider  
## プログラム概要
任意の画像を縦方向及び横方向に指定数分割して表示するツール。ブラウザ上で動作し、インストールなどの手順が不要。  
## 開発環境/動作環境
開発環境：Windows8.1,Notepad++  
使用言語・ライブラリ:javascript,HTML5,OpenCVjs  
動作環境：FireFox,GoogleChrome  
※ IE では動作未確認  
## ソースファイル構成
photo divider.html  
divider.js  
## 実行方法
photo divider.html を開く。  
## 実行結果
![スクリーンショット](https://raw.githubusercontent.com/t-hayashi00/photoDivider/master/image1.png )  
図1 入力画像  
今回はこの画像を使用する。  
![スクリーンショット](https://raw.githubusercontent.com/t-hayashi00/photoDivider/master/image2.png )  
図2 起動直後  
photo divider.html を開くとブラウザ上に上記のようなページが表示される。  
![スクリーンショット](https://raw.githubusercontent.com/t-hayashi00/photoDivider/master/image3.png )  
図3 画像選択後  
画像を選択後、数値を入力して分割数を決定する。  
![スクリーンショット](https://raw.githubusercontent.com/t-hayashi00/photoDivider/master/image4.png )  
図4 分割処理後  
確かに、画像が指定数分割されていることが分かる。  
## プログラム操作説明
1. 分割したい画像を参照ボタンから選択します。  
2. 縦、横の分割数を入力します。(1～64 の範囲内で指定してください。)  
3. ”レッツぶんかつ”ボタンを選択すると分割された画像がページ下部に表示されます。  
※分割数を大きくし過ぎた場合ブラウザの動作が遅くなる場合があります。  
※分割を再度行いたい場合は一度ページを更新して再度の手順から行ってください。  
## プログラム仕様説明
入力画像のファイル形式はbmp,png,jpg とする。出力画像のファイル形式はjpg となる。出力された画像
は、一行に横の分割数分、縦の分割数の行数分だけ出力される。例えば、縦を3、横を4 と指定した場合「一
行あたり4 枚の画像が3 行分、合計12 枚の画像」が出力される。  
プログラムは、アプリケーションの本体であるphoto divider.html と、アプリケーションの動作を記述した
divider.js から成る。HTML 内のボタンがdivider.js に実装されたメソッドを呼び出し、画像の分割を行う。  
divider.js のDivide メソッドが画像の分割作業の本体を担う。このメソッドは、入力画像と分割数をHTML
のタグから取得し、分割数に応じてHTML にimage タグを追加し、そこに元画像を分割した画像ファイルを
生成して書き込んでいく。
