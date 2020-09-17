function urlTimeout(url, timer = 5000) {
  return new Promise((resolve, reject) => {
    fetch(url).then(data => data.json).then(data => resolve(data));
    setTimeout(() => {reject(new Error("Url Request Timeout"))}, timer)
  });
}