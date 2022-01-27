/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Tools & Supplies",
    title: "Tools & Supplies",
    text:
      "We offer select high-quality tools and supplies to make your cultivation experience easy and safe.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "The Easiest mushroom to grow",
    title: "The Easiest mushroom to grow",
    text:
      "Growing mushrooms is not quite like growing a plant.  But you do need plants to grow mushrooms, or at least cellulose and lignin.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Summer Mushroom",
    title: "Summer Mushroom",
    text:
      "Wow!  We have been super busy this summer.  In June, a tornado knocked down about a half acre of old forest right behind the house.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Get your Mushroom delivered at home collect a sample from the Farm",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.KeyFeature" }} id="feature">
      <Container sx={styles.container}>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of our products "
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    marginTop: 30,
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
