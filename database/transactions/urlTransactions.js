const { v4: uuid } = require('uuid');

class UrlTransactions {
  urls = {};

  constructor() {}

  generateUrl(url) {
    const short = uuid().slice(0, 6);

    this.urls[short] = url;

    return 'Successfully inserted';
  }

  insertUrl(short, url) {
    const isShortExist = Object.keys(this.urls).some((key) => {
      return key === short;
    });

    if (isShortExist) return 'Short url exists';

    this.urls[short] = url;
    return 'Successfully inserted';
  }

  getUrl(short) {
    const foundShort = Object.keys(this.urls).filter((key) => {
      return key === short;
    })[0];

    return this.urls[foundShort];
  }
}

module.exports = UrlTransactions;
