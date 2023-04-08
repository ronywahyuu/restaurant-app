function formatDescription(description) {
  if (description.length > 100) {
    return `${description.substr(0, 100)}...`;
  }
  return description;
}

function ratingColor(rating) {
  if (rating >= 4) {
    return 'rating--high';
  } if (rating >= 3.5) {
    return 'rating--medium';
  }
  return 'rating--low';
}

export {
  formatDescription,
  ratingColor,
};
