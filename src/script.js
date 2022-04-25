function json(url) {
  return fetch(url).then(res => res.json());
}
const apiKey = 'b6e1a3054bafdd60f60b91a4a17c4d200e67d017560f1c985bb0a7c4'
json(`https://api.ipdata.co?api-key=${apiKey}&fields=ip`).then(data => {
  console.log(data.ip);
  const message = `Hello,  ${data.ip}` // Try edit me
  document.querySelector('#header').innerHTML = message
});

console.log(myip); 









// Update header text


// Log to console
console.log(message)
