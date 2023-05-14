/* eslint-disable no-undef */
// import addReviewInitiator from './helpers/reviewHelper';
const assert = require('assert');

const { addReview } = require('./helpers/addReview');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('adding new customer review when field not empty ', async ({ I }) => {
  const name = 'Lorde';
  const review = 'Good restaurant!';

  await addReview({ I, name, review });

  // show toast
  I.waitForElement('.toast-success', 10);
  I.seeElement('.toast-success');
  I.see('Review sent!');

  // wait for review to appear
  I.waitForElement('review-item', 5);
  I.seeElement(locate('review-item').last());

  // assert that review was added
  const lastReviewName = await I.grabTextFrom(locate('review-item .review-item__name').last());
  const lastReviewContent = await I.grabTextFrom(locate('review-item .review-item-content').last());

  assert.strictEqual(name, lastReviewName);
  assert.strictEqual(review, lastReviewContent);
});

Scenario('adding new customer review when field empty ', async ({ I }) => {
  await addReview({ I, name: '', review: '' });

  // show toast
  I.seeElement('.toast-error');
  I.see('Please fill all the fields!');
});

Scenario('adding new customer review when name field empty ', async ({ I }) => {
  await addReview({ I, name: '', review: 'coba review e2e' });

  // show toast
  I.seeElement('.toast-error');
  I.see('Please fill all the fields!');
});

Scenario('adding new customer review when review field empty ', async ({ I }) => {
  await addReview({ I, name: 'Coba e2e', review: '' });

  // show toast
  I.seeElement('.toast-error');
  I.see('Please fill all the fields!');
});

Scenario('adding new customer review with empty spaces string', async ({ I }) => {
  await addReview({ I, name: ' ', review: ' ' });

  // show toast
  I.seeElement('.toast-error');
  I.see('Please fill all the fields!');
});
