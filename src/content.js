// query-validation-status のカスタムタグを取得する
const queryValidationStatus = document.querySelector("query-validation-status");

// クリップボードにクエリバリデーションのメッセージをコピーする
const copyMessage = () => {
  // ChromeでClipboard APIに対応しなくなった場合に、エラーを回避するため
  if (!navigator.clipboard) {
    return;
  }

  const validationMessage =
    queryValidationStatus.querySelector("div > div").textContent;

  navigator.clipboard.writeText(validationMessage);
};

queryValidationStatus.addEventListener("click", copyMessage);
