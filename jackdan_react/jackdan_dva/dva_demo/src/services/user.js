import request from '../utils/requets';

export function getUserData() {
  // return request
  return new Promise((resolve, reject) => {
    const _resp = {
      "status": 200,
      "data": [
        {
          "name": "jackdan",
          "age": 28,
          "hobby": "beauty"
        }
      ]
    };
    resolve(_resp);
  });
}