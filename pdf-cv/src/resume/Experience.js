/* eslint-disable react/no-array-index-key */

import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: "Infini",
    fontStyle: "italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 8,
  },
  details: {
    fontSize: 8.75,
    fontFamily: "Infini",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  title: {
    fontSize: 10.5,
    color: "black",
    textDecoration: "none",
    fontFamily: "Infini",
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: "Toca Boca",
    date: "2020 — 2021",
    details: [
      "Vidareutveckling av plattformen inkremenellt genom kod-reviews, parkodning och dokumentation",
      "Design och implementering av nya och befintliga features i systemet med NestJs, AWS och Docker",
      "Tagit lead på att utforma och koda den primarä användarupplevelsen i ReactJS med Typescript",
      "Lett teamets UX-arbete genom att producera wireframes, prototyper och tester, och drivit för presentera gruppens insikter till stakeholders och övriga team",
    ],
    position: "Frontend developer, Ui designer",
  },
];

const Experience = (props) => (
  <View style={styles.container}>
    <Title text={props.title} elementName="h3" />
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default Experience;
