"use strict";
const axios = require('axios');
const envs = require('./env-vars');
const url = `https://www.googleapis.com/customsearch/v1?key=${envs.api_key}&cx=${envs.cx_id}&searchType=image&q=`;

module.exports = {
 imageSearch(term, offset='') {
    if(offset) {
        offset = `&start=${offset}`;
    }
    return axios.get(`${url}${term}${offset}`)
      .then(res => res.data.items.map(seekLinks))
      .catch(err => console.log(err));
 }
};


function seekLinks({title, link, image: {contextLink, thumbnailLink}}) {
    return {title, link, contextLink, thumbnailLink};
}
