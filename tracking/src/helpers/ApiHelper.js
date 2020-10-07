export const track = (trackingCode) => {
  const promiseCallback = (resolve, reject) => {
    fetch(`http://localhost:3001/?tracking=${trackingCode}`)
    .then(response => response.json())
    .then(result => {
      if (result.message === "OK") {
        resolve(result.data);
      }
    })
    .catch(reject);
}
  return new Promise(promiseCallback)
}