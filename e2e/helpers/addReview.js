/* eslint-disable no-undef */
// const assert = require('assert');

async function addReview({ I, name, review }) {
  // go to first restaurant
  I.waitForElement('restaurant-item a', 5);
  I.seeElement('restaurant-item a');

  I.click(locate('restaurant-item a').first());

  I.waitForElement('review-form', 5);
  I.seeElement('review-form');

  // fill review form
  I.fillField('name', name);
  I.fillField('review', review);

  // pause();
  I.seeElement('review-form button[type=submit]');
  I.click('review-form button[type=submit]');

  // // wait for review to appear
  // I.waitForElement('review-item', 5);
  // I.seeElement(locate('review-item').last());

  // // assert that review was added
  // const lastReviewName = await I.grabTextFrom(locate('review-item .review-item__name').last());
  // eslint-disable-next-line max-len
  // const lastReviewContent = await I.grabTextFrom(locate('review-item .review-item-content').last());

  // assert.strictEqual(name, lastReviewName);
  // assert.strictEqual(review, lastReviewContent);
}

module.exports = {
  addReview,
};
