// クリップボードにクエリバリデーションのメッセージをコピーする
const copyMessage = () => {
  // ChromeでClipboard APIに対応しなくなった場合に、エラーを回避するため
  if (!navigator.clipboard) {
    return;
  }

  // query-validation-status のカスタムタグを取得する
  const queryValidationStatus = document.querySelector(
    "query-validation-status"
  );

  if (!queryValidationStatus) return;

  // クエリバリデーションのテキストを取得する
  const validationMessage =
    queryValidationStatus.querySelector("div > div").textContent;

  navigator.clipboard.writeText(validationMessage);
};

document.addEventListener("keydown", (event) => {
  // Windows: Ctrl + B もしくは MacOS: Command + B キーが押されていると発火する
  if ((event.ctrlKey || event.metaKey) && event.key === "b") copyMessage();
});
