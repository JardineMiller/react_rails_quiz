const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200) return;
    let response = JSON.parse(xhr.responseText);
    callback(response);
  })
  xhr.send();
};

Request.prototype.post = function(body) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', this.url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', () => {
    if(xhr.status !== 201) return;
    JSON.parse(xhr.responseText);
  })
  xhr.send(JSON.stringify(body));
};

Request.prototype.delete = function() {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', this.url);
  xhr.addEventListener('load', () => {
    if(xhr.status !== 204) return;
  })
  xhr.send();
};

Request.prototype.put = function(body) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', this.url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200) return;
  })
  xhr.send(JSON.stringify(body));
};

export default Request