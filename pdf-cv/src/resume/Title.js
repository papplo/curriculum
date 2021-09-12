import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const sizes = {
  h1: 26.13,
  h2: 21.77,
  h3: 18.14,
  h4: 15.12,
  h5: 12.6,
  h6: 10.5,
  default: 10.5,
  lead: 12.6,
  small: 8.75,
};

sizes.getSize = (elementName) => sizes[elementName] ?? sizes.default;

const styles = (elementName, color) =>
  StyleSheet.create({
    title: {
      fontFamily: "Infini",
      fontStyle: "italic",
      color: color ?? "#DE8A00",
      fontSize: sizes.getSize(elementName),
      marginBottom: 10,
    },
  });

const Title = ({ text, elementName = "h2", color }) => {
  const titleStyle = styles(elementName, color);
  console.log(titleStyle);
  return <Text style={titleStyle.title}>{text}</Text>;
};

export default Title;
