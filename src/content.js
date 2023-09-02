// 取得したいDOM（この配下にアイコンのボタンとバリデーションメッセージが含まれる）
const targetSelector = "query-validation-status";

// const onTagAppear = (tagElement) => {
//   alert("タグが現れた");
// };

// MutationObserver の設定
const observer = new MutationObserver((mutationsList) => {
  setTimeout(() => {
    mutationsList.forEach((mutation) => {
      // 変更が子孫ノードの追加であるかを確認
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // 追加されたノードの中からBigQuery
        const addedNodes = Array.from(mutation.addedNodes);
        const targetElement = addedNodes.find((node) => {
          console.log(node.classList);
          return (
            node.classList &&
            node.classList.contains("cfc-action-bar-content-right")
          );
        });

        if (targetElement) {
          alert("指定の要素が追加されました");
        }
      }
      // alert(mutation.type);
      // alert(mutation.addNodes);
      // alert(mutation.target);
    });
  }, 3000);
});

// 監視を開始
window.addEventListener("load", () => {
  alert("監視start");
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

// クリップボードにクエリバリデーションのメッセージをコピーする
// const copyMessage = () => {
//   // ChromeでClipboard APIに対応しなくなった場合に、エラーを回避するため
//   if (!navigator.clipboard) {
//     return;
//   }

//   // query-validation-status のカスタムタグを取得する
//   const queryValidationStatus = document.querySelector(
//     "query-validation-status"
//   );

//   if (!queryValidationStatus) return;

//   // クエリバリデーションのテキストを取得する
//   const validationMessage =
//     queryValidationStatus.querySelector("div > div").textContent;

//   navigator.clipboard.writeText(validationMessage);
// };

// document.addEventListener("keydown", (event) => {
//   // Windows: Ctrl + B もしくは MacOS: Command + B キーが押されていると発火する
//   if ((event.ctrlKey || event.metaKey) && event.key === "b") copyMessage();
// });

// ページ内の全ての button タグを取得
// const allButtons = window.addEventListener("load", () => {
//   alert("OK");
//   return document.querySelectorAll("button");
// });

// // 全ての button タグにクリックイベントリスナーを追加
// allButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // ボタンがクリックされたときの処理をここに記述
//     alert("ボタンがクリックされました！");
//   });
// });
