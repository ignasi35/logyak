
function attachImage(url, excursionId) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/excursions/' + excursionId + '/pictures' );
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        // refresh image gallery
      } else {
        console.log('Could not store picture.');
      }
    }
  };
  xhr.send(JSON.stringify( { imageUrl : url } ));
}

function uploadFile(file, signedRequest, url, excursionId) {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        attachImage(url, excursionId);
      } else {
        alert('Could not upload file.');
        console.log(xhr);
      }
    }
  };
  xhr.send(file);
}


function getSignedRequest(file, excursionId) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/sign-s3?file-name=' + file.name + '&file-type=' + file.type);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        uploadFile(file, response.signedRequest, response.url, excursionId);
      } else {
        console.log('Could not get signed URL.');
      }
    }
  };
  xhr.send();
}


document.getElementById("uploadFileToExcursion").onchange = function () {
  var input = document.getElementById("uploadFileToExcursion");
	var file = input.files[0];
  var excursionId = input.name;
	getSignedRequest(file, excursionId);
}