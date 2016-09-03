function uploadFile(file, signedRequest, url) {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("ok ok ok ")
      } else {
        alert('Could not upload file.');
        console.log(xhr);
      }
    }
  };
  xhr.send(file);
}


function getSignedRequest(file) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/sign-s3?file-name=' + file.name + '&file-type=' + file.type);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        console.log(xhr.response.url);
        uploadFile(file, response.signedRequest, response.url);
      } else {
        console.log('Could not get signed URL.');
      }
    }
  };
  xhr.send();
}


document.getElementById("uploadFileToExcursion").onchange = function () {

	var file = document.getElementById("uploadFileToExcursion").files[0];
	getSignedRequest(file);

}