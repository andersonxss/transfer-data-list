import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  cards: {
    width: "auto",
    minWidth: 300,
    height: 230,
    overflow: "auto",
    backgroundColor: theme.palette.background.dark,
    boxShadow: "0px 4px 8px #0000001A",
  },
  cardHeader: {
    background: theme.palette.primary.main,
    color: "white",
    fontSize: "12px!important",
  },
}));
const CardsItens = (props) => {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={title} />
      <CardContent className={classes.cards}>{children}</CardContent>
    </Card>
  );
};

export default CardsItens;
