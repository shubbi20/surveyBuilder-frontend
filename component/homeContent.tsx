import styles from "../styles/homeContent.module.scss";
import surveyRocketo from "../images/surveyRocketo.png";
import { BelowBox } from "./belowBox";
import {
  LineChartOutlined,
  RocketOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import React from "react";

export const HomeContent = () => {
  return (
    <div className={styles.contentContainer}>
      <p className={styles.fontStyle}>Survey Rocketo</p>
      <div className={styles.containerBox}>
        <div className={styles.leftBox}>
          <h1>
            Good companies ask customers’ opinions. Great companies act on them.
          </h1>
          <p style={{ marginTop: "1em" }}>
            Let in-context customer surveys take your business to the next
            level. From nurture campaigns to onboarding experiences—and much
            more—Surveys helps you capture and automatically act on valuable
            customer insights.
          </p>
        </div>
        <div className={styles.rightBox}>
          <img
            src={surveyRocketo.src}
            style={{ height: "100%", width: "100%" }}
            alt="logo"
          />
        </div>
      </div>

      {/**
       * other part
       */}
      <div className={styles.midContainer}>
        <h1>A survey tool like no other</h1>
        <p>
          Only Survey Rocketo connects you to valuable customer insights—and
          then helps you turn those insights into action, automatically.
        </p>
      </div>

      <div className={styles.belowContainer}>
        <BelowBox
          Boxicon={(<LineChartOutlined />) as any}
          Boxheading={"Simple and customizable"}
          Boxdesc={
            "survey Rocketo makes it quick and easy to create surveys that match the look and feel of yourbrand. Branching logic (coming soon)"
          }
        ></BelowBox>
        {/**
         * Box2
         */}
        <BelowBox
          Boxicon={(<RocketOutlined />) as any}
          Boxheading={"Increased response rates"}
          Boxdesc={
            "Send your customers in-context surveys to collect data on what they’re doing—while they’re doing it—whether that’s on web, mobile, or in your app."
          }
        ></BelowBox>

        {/**
         * Box3
         */}
        <BelowBox
          Boxicon={(<UsergroupDeleteOutlined />) as any}
          Boxheading={"Improved customer data"}
          Boxdesc={
            "Collect first-party data to enrich individual user profiles so you can give your customers a more personalized experience."
          }
        ></BelowBox>
      </div>
    </div>
  );
};
