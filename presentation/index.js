// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const slideTransition = ["spin", "zoom"];
const images = {
  assembly: require("../assets/assembly.jpg").replace("/", ""),
  babel: require("../assets/babel.jpg").replace("/", ""),
  city: require("../assets/city.jpg").replace("/", ""),
  components: require("../assets/components.jpg").replace("/", ""),
  cowboy: require("../assets/cowboy.jpg").replace("/", ""),
  dinosaurs: require("../assets/dinosaurs.png").replace("/", ""),
  eich: require("../assets/eich.jpg").replace("/", ""),
  enterprise: require("../assets/enterprise.jpg").replace("/", ""),
  flow: require("../assets/flow.jpg").replace("/", ""),
  jumper: require("../assets/jumper.jpg").replace("/", ""),
  jobs: require("../assets/jobs.png").replace("/", ""),
  legos: require("../assets/legos.jpg").replace("/", ""),
  npmShape: require("../assets/npm_shape.png").replace("/", ""),
  moduleCounts: require("../assets/module_counts.png").replace("/", ""),
  redmonk: require("../assets/redmonk.png").replace("/", ""),
  shapeSorter: require("../assets/shape_sorter.jpg").replace("/", ""),
  survivejs: require("../assets/survivejs.png").replace("/", ""),
  tools: require("../assets/tools.jpg").replace("/", ""),
  types: require("../assets/types.jpg").replace("/", ""),
  unique: require("../assets/unique.png").replace("/", "")
};

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JavaScript
            </Heading>
            <Heading size={2} textColor="white">
              Quo Vadis?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.eich} margin="0px auto 40px" height="400px"/>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Brendan Eich
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/Brendan_Eich#/media/File:Brendan_Eich_Mozilla_Foundation_official_photo.jpg">Wikipedia (CC BY-SA)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>2016 - 71.3% of sites use JavaScript</Quote>
              <Cite>
                <Link textColor="tertiary" href="http://w3techs.com/technologies/history_overview/javascript_library/all/y">W3Techs</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Job Trends
            </Heading>
            <Layout>
              <Image src={images.jobs} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends?q=Angularjs%2C+React.js%2C+Knockout%2C+Backbone.js&l=">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.unique} margin="0px auto 40px" width="100%"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>49% of 126k packages have tests</Quote>
              <Cite>
                <Link textColor="tertiary" href="http://nodechecker.com/">NodeChecker</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>138k packages out of 231k have readme, license, and repository data</Quote>
              <Cite>@scriptjs</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>106k packages out of these 138k have seen action within a year</Quote>
              <Cite>@scriptjs</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Around 30-40k packages worth using?</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>{"Communities are constrained to produce designs which are copies of the communication structures of these communities"}</Quote>
              <Cite>Melvin Conway (adapted)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.dinosaurs} margin="0px auto 40px" width="100%"/>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Packages of all shapes and sizes
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://en.wikipedia.org/wiki/File:Largestdinosaursbysuborder_scale.png">Wikipedia (CC BY-SA)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.jumper} bgDarken={0.75} bgColor="black">
            <BlockQuote>
              <Quote>2669 results for ‘boilerplate’</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.shapeSorter} bgDarken={0.75} bgColor="black">
            <BlockQuote>
              <Quote>12263 results for ‘framework’</Quote>
              <Cite>
                <Link textColor="tertiary" href="https://www.flickr.com/photos/ellasdad/425813314">Andy (CC BY)</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.tools} bgDarken={0.75}>
            <BlockQuote>
              <Quote>1067 results for ‘toolkit’</Quote>
              <Cite>
                <Link textColor="tertiary" href="https://www.flickr.com/photos/17178266@N00/4334202250/">Meghana Kulkarni (CC BY-NC)</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.legos} bgDarken={0.75}>
            <BlockQuote>
              <Quote>30187 results for ‘library’</Quote>
              <Cite>
                <Link textColor="tertiary" href="https://pixabay.com/en/lego-blocks-bricks-toy-game-252602/">estefania17 (PD)</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.components} bgDarken={0.75}>
            <BlockQuote>
              <Quote>13711 results for ‘component’</Quote>
              <Cite>
                <Link textColor="tertiary" href="https://commons.wikimedia.org/wiki/File:Componentes.JPG">Kae (PD)</Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.tools} bgDarken={0.25}>
            <iframe width="840" height="630" src="https://www.youtube.com/embed/Y7XW-mewUm8" frameborder="0" allowfullscreen></iframe>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.npmShape} align="flex-end flex-end">
            <Heading size={1} caps fit>
              Dependencies
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://anvaka.github.io/allnpmviz3d/">allnpmviz3d by @anvaka</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.babel} bgDarken={0.75} bgColor="tertiary" textColor="primary">
            <Heading caps fit size={1} textColor="primary">
              ECMAScript
            </Heading>
            <Markdown>
              {`
* ES5 - 2009
* ES6/ES2015 - 20+ new features
* ES7/ES2016 - **Array.prototype.include**, **\*\***
* [Current proposals](https://github.com/tc39/ecma262)
              `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.cowboy} bgDarken={0.75} bgColor="black">
            <BlockQuote>
              <Quote>{"Array(16).join('hero' - 1) + 'Batman';"}</Quote>
            </BlockQuote>
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/cowboy-horse-dog-pasture-western-1130695/">elijay (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.enterprise} margin="0px auto 40px" height="400px"/>
            <Heading size={2} caps textColor="primary" textFont="primary">
              JavaScript Goes Enterprise
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/leonard-nimoy-william-shatner-393861/">skeeze (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.flow} bgDarken={0.25}>
            <Heading size={1} caps>
              Flowtype
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/honey-sweet-syrup-organic-golden-1006972/">stevepb (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.types} bgDarken={0.25}>
            <Heading size={1} caps>
              TypeScript
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/typewriter-book-notebook-paper-801921/">Unsplash (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.assembly} bgDarken={0.25}>
            <Heading size={1} caps>
              WebAssembly
            </Heading>
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/wheels-machine-installation-art-784865/">Efraimstochter (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>{"The future is already here — it's just not very evenly distributed"}</Quote>
              <Cite>William Gibson</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Heading size={1} textColor="primary">
              SurviveJS
            </Heading>
            <Image src={images.survivejs} margin="0px auto 40px" height="566px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
