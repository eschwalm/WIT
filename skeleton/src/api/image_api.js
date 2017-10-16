import cl from './config/cloudinary.js';
import axios from 'axios';

export const uploadImage = async (uri) => {
    const form = new FormData();
    form.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
    form.append('upload_preset', 'wit-app');
    form.append('api_key', cl.api_key);
    form.append('timestamp', (Date.now() / 1000) | 0);

    const request = await axios.post(
      'https://api.cloudinary.com/v1_1/' + cl.cloud_name + '/image/upload/',
      form, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    });

    const response = await request.data;
    return response;
};
