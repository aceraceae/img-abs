"use strict";
const axios = require('axios');
const envs = require('./env-vars');
const url = `https://www.googleapis.com/customsearch/v1?key=${envs.API_KEY}&cx=${envs.CX_ID}&searchType=image&q=`;

module.exports = {
 imageSearch(term) {
    return axios.get(url+term)
      .then(res =>
          res.data.items.map(seekLinks))
      .catch(err => console.log(err));
 }
};


function seekLinks({title, link, image: {contextLink, thumbnailLink}}) {
    return {title, link, contextLink, thumbnailLink};
}
