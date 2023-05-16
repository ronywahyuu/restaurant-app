/* eslint-disable no-undef */
// assert
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant ', ({ I }) => {
  I.waitForElement('.empty-state-container', 5);
  I.seeElement('.empty-state-container');
  I.waitForElement('.error-message-text', 5);
  I.see('Oops, there is no data yet', '.error-message-text');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.empty-state-container', 5);
  I.seeElement('.empty-state-container');

  I.amOnPage('/');
  // pause();

  // I.seeElement('.card__text a');
  I.waitForElement('restaurant-item a', 5);
  I.seeElement('restaurant-item a');

  const firstRestaurantTitle = await I.grabTextFrom(locate('restaurant-item a').first());

  I.waitForElement('restaurant-item a', 5);
  I.click(locate('restaurant-item a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');

  I.click('#likeButton');

  // start liking
  I.amOnPage('/#/favorite');
  I.waitForElement('.favorite-container', 5);
  I.seeElement('.favorite-container');

  I.waitForElement('restaurant-item', 5);
  I.seeElement('restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('restaurant-item a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // console.log(`likedRestaurantTitle: ${likedRestaurantTitle}`);
});

// unliking one restaurant
Scenario('unliking one restaurant', async ({ I }) => {
  // like one restaurant first
  I.amOnPage('/');

  I.waitForElement('restaurant-item a', 5);
  I.seeElement('restaurant-item a');

  I.click(locate('restaurant-item a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');

  I.click('#likeButton');

  // start unliking
  I.amOnPage('/#/favorite');
  I.waitForElement('.favorite-container', 5);
  I.seeElement('.favorite-container');

  I.waitForElement('restaurant-item', 5);
  I.seeElement('restaurant-item');

  I.click(locate('restaurant-item a').first());

  I.waitForElement('#likedButton', 5);
  I.seeElement('#likedButton');

  I.click('#likedButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.empty-state-container', 5);
  I.seeElement('.empty-state-container');
});
