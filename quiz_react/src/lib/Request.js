const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function() {
  // console.log(this.url);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.addEventListener('load', () => {
    console.log(xhr.responseText);
  })
  xhr.send();
};

Request.prototype.post = function(body) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', this.url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', function() {
    if(this.status !== 201) return;
    JSON.parse(this.responseText);
  })
  xhr.send(JSON.stringify(body));
};

Request.prototype.delete = function() {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', this.url);
  xhr.addEventListener('load', function() {
    if(this.status !== 204) return;
  })
  xhr.send();
};

Request.prototype.put = function(body) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', this.url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', function() {
    if(this.status !== 200) return;
  })
  xhr.send(JSON.stringify(body));
};

export default Request