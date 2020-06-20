/**
 * @param {*} url fileUrl
 */
function downloadUrlFile(fileUrl) {
  url = url.replace(/\\/g, '/');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  // xhr.setRequestHeader('Authorization', 'Basic a2VybWl0Omtlcm1pdA==');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // 获取文件blob数据并保存
      var fileName = getFileName(url);
      fileSaveAs(xhr.response, fileName);
    }
  };

  xhr.send();
}

/**
 * 
 * @param {*} data file blob data
 * @param {*} name file name
 */
function fileSaveAs(data, name) {
  var urlObj = window.URL || window.webkitURL || window;
  var exportBlob = new Blob([data]);
  var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  saveLink.href = urlObj.createObjectURL(exportBlob);
  saveLink.download = name;
  saveLink.click();
}

/**
 * 
 * @param {*} url file url 
 */
function getFileName(url) {
  var num = url.lastIndexOf('/');
  var fileName = url.substring(num);
  // desperate parameter and fileName
  fileName = decodeURI(fileName.split("?")[0]);
  return fileName;
}