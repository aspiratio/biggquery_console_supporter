// 取得したいDOM（この配下にアイコンのボタンとバリデーションメッセージが含まれる）
const targetSelector = "query-validation-status";

// const onTagAppear = (tagElement) => {
//   alert("タグが現れた");
// };

// MutationObserver の設定
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    alert(mutation.type);
    alert(mutation.addNodes);
    alert(mutation.target);
  });
});

// 監視を開始
window.addEventListener("load", () => {
  alert("start");
  observer.observe(document.documentElement, {
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
