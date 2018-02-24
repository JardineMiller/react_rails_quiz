class Request(url) {
  this.url = url;
}

Request.prototype.get = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', () => {
    console.log(xhr.responseText);
  })
  xhr.send();
};