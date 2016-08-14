"use strict";

module.exports = {
    welcome: `This API allows you to search through the web for the images.\n
All you need to do is to type your search term into the address bar like this:\n
\thttps://imageabstraction.herokuapp.com/imagesearch/YOUR_SEARCH_TERM\n
You could specify offset of the results:\n
\thttps://imageabstraction.herokuapp.com/imagesearch/YOUR_SEARCH_TERM?offset=NUMBER\n
Examples:\n
\thttps://imageabstraction.herokuapp.com/imagesearch/tangerine\n
\thttps://imageabstraction.herokuapp.com/imagesearch/tangerine/offset=20\n
You could also see latest search terms (default is 10 results):\n
\thttps://imageabstraction.herokuapp.com/latest/imagesearch
\thttps://imageabstraction.herokuapp.com/latest/imagesearch?items=15`
};
