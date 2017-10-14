import CryptoJS from 'crypto-js';
import config from './config/cloudinary.js';

export const uploadImage = (uri) => {
  let timestamp = (Date.now() / 1000 | 0).toString();
  let key = config.api_key;
  let secret = config.api_secret;
  let cloud = config.cloud_name;
  let hash = 'timestamp=' + timestamp + secret;
  let signature = CryptoJS.SHA1(hash).toString();
  let url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload/';

  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.onload = () => {
    console.log(xhr);
  };
  let formdata = new FormData();
  formdata.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
  formdata.append('upload_preset', 'wit-app');
  formdata.append('timestamp', timestamp);
  formdata.append('api_key', key);
  formdata.append('signature', signature);
  xhr.send(formdata);
};

// credits:
// https://gist.github.com/cmcewen/b1ea2464aa88ae32be17
