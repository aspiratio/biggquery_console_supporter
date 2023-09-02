const utility = require("./utility.js");

document.body.addEventListener("click", (event) => {
  // 取得したいカスタムタグ（この配下にアイコンのボタンとバリデーションメッセージが含まれる）
  const targetTag = "query-validation-status";
  // クリックされた要素
  const clickedElement = event.target;

  /*
  クリックされた要素より上位の query-validation-status タグを取得する
  これによって、複数存在する中から目的のタグだけを取得できる
  */
  const queryValidationStatusElement = utility.findParentElementByTagName(
    clickedElement,
    targetTag
  );

  if (!queryValidationStatusElement) return;

  // バリデーションメッセージを含む要素を取得する
  const messageElement = queryValidationStatusElement.querySelectorAll(
    ".cfc-truncated-text, .ng-star-inserted"
  );

  utility.copyElementTextToClipboard(messageElement);
});
