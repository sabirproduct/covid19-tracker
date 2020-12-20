import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, isGrey, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active &&  "infoBox--selected"} ${
        isRed && "infoBox--red"} ${isGrey && "infoBox--grey"}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isGrey && !isRed && "infoBox__cases--green"} ${isGrey && !isRed && "infobox__cases--grey"}`}>
          {cases}
        </h2>

        <Typography className={"infoBox__total"} color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;