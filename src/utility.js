/**
 * 上位の指定した要素を再起的に探す関数
 * @param {HTMLElement} element DOM要素
 * @param {string} targetTagName 取得したいタグの名前
 * @return {HTMLElement|null} 要素が見つかった場合はHTMLElement、見つからない場合はnullを返す
 */
const findParentElementByTagName = (element, targetTagName) => {
  // 最上位に行き着くと関数が終了する
  if (!element) return null;

  /*
	要素名を比較するために念の為、小文字に統一する
	HTMLはタグ名を大文字小文字で区別しないが、JSの .tagName プロパティによって取得されるタグ名は大文字小文字が区別されるため
	*/
  if (element.tagName.toLowerCase() === targetTagName.toLowerCase()) {
    return element;
  }

  return findParentElementByTagName(element.parentElement, targetTagName);
};

/**
 * 指定した要素内のテキストをクリップボードにコピーする
 * @param {HTMLElement} element DOM要素
 */

const copyElementTextToClipboard = (element) => {
  // ChromeでClipboard APIに対応しなくなった場合に、エラーを回避するため
  if (!navigator.clipboard) {
    return;
  }

  if (!element) return;

  navigator.clipboard.writeText(element.textContent);
};

module.exports = {
  findParentElementByTagName,
  copyElementTextToClipboard,
};
