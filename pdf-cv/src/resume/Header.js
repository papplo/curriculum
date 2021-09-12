import React from "react";

import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    marginTop: 2,
  },
  name: {
    fontSize: 24,
    letterSpacing: "-0.4pt",
    fontFamily: "Infini",
    fontStyle: "italic",
    color: "#DE8A00",
  },
  subtitle: {
    fontSize: 12,
    justifySelf: "flex-end",
    fontFamily: "Infini",
  },
  link: {
    fontFamily: "Infini",
    fontSize: 10,
    color: "#4A4A4A",
    textDecoration: "none",
    alignSelf: "flex-start",
    justifySelf: "flex-start",
  },
});

const defaultProps = {
  name: "Pablo Anttila",
  tagline:
    "Ui/ Frontend-utvecklare fokuserad på webb och mobila enheter. Utformar Ui/Ux, har ett öga för detaljer och bakgrund inom formgivning.",
  email: "pablo.anttila@gmail.com",
  phone: "0720073863",
};

const Header = ({ props = defaultProps }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.subtitle}>{props.tagline}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href={props.email} style={styles.link}>
        {props.email}
      </Link>
    </View>
  </View>
);

export default Header;
