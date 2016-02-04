/* eslint no-console:0 */
const ghpages = require("gh-pages");

main();

const main = () => {
  ghpages.publish("./out", {
    silent: false,
    logger: console.log.bind(console)
  }, console.error.bind(console));
};
