export const shortener = () => {
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randIndex = () => Math.floor(Math.random() * abc.length);

  return {
    getLink() {
      let randString = "";
      for (let i = 0; i < 7; ++i) {
        randString += abc[randIndex()];
      }
      return randString;
    },
  };
};