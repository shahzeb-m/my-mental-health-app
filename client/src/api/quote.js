import _ from 'lodash';

async function getQuoteCategories() {
  try {
    const response = await fetch(
      'https://quotes.rest/qod/categories?language=en',
    );

    const res = await response.json();
    return res ? res.contents.categories : null;
  } catch (err) {
    console.log(err);
  }
}

async function getQuote(category) {
  try {
    const reqUrl = category
      ? `https://quotes.rest/qod?category=${category}&language=en`
      : 'https://quotes.rest/qod?language=en';
    const response = await fetch(reqUrl);

    const res = await response.json();
    console.log(res);
    return _.pick(res.contents.quotes[0], ['quote', 'author']);
  } catch (err) {
    console.log(err);
  }
}

export { getQuoteCategories, getQuote };
