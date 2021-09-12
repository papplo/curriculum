import React from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Header from "./Header";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import InfiniRegular from "../fonts/infini_regular/infini-regular-safari.ttf";
import InfiniIalic from "../fonts/infini_italic/infini-italic-safari.ttf";
import luke from "./thumb.png";
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    "@media max-width: 400": {
      flexDirection: "column",
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: "80px",
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0,
    },
    "@media orientation: landscape": {
      width: 200,
    },
  },
  footer: {
    fontSize: 8,
    fontFamily: "Infini",
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
});

Font.register({
  family: "Infini",
  src: InfiniRegular,
  fontStyle: "normal",
  fontWeight: "normal",
});
Font.register({
  family: "Infini",
  src: InfiniIalic,
  fontStyle: "italic",
  fontWeight: "normal",
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        {/* <Image src={luke} style={styles.image} /> */}
        {/* <Skills /> */}
      </View>
      {/* <Education /> */}
      <Experience title="Erfarenhet" />
    </View>
    <Text style={styles.footer}>Sida n av n</Text>
  </Page>
);

const MyResume = () => (
  <Document
    author="Pablo Anttila"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume size="A4" />
  </Document>
);

export default MyResume;
