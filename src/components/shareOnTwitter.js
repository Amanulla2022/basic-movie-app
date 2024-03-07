const shareOnTwitter = (movie) => {
  const hashtag1 = `${movie.year}`;
  const hashtag2 = `${movie.lang}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${movie.title} - ${movie.director} #${hashtag1} #${hashtag2}`
  )}`;
  window.open(twitterUrl, "_blank");
};

export default shareOnTwitter;
