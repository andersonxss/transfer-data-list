import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button,
} from "@mui/material";
import CardsItens from "./CardsItens";
import TransferActions from "./TransferActions";

const useStyles = makeStyles(() => ({
  customList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#cfe8fc",
    height: "98vh",
  },
}));

function App() {
  const classes = useStyles();
  const {
    checked,
    listLeft,
    listRight,
    leftChecked,
    rightChecked,
    checkItemLeftAll,
    checkItemRightAll,
    checkItemLeft,
    checkItemRight,
    handleToggle,
  } = TransferActions();

  const listItensCheckbox = (items) =>
    items.length > 0 && (
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value.id}-label`;
          return (
            <ListItem
              key={value.id}
              role="listitem"
              button
              onClick={() => handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={
                    checked.findIndex((elem) => elem.id === value.id) !== -1
                  }
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    );
  return (
    <Grid className={classes.customList} p={1}>
      <Grid item xs={12} sm={5}>
        <CardsItens title="Lista Esquerda" cnpjs={true}>
          {listItensCheckbox(listLeft)}
        </CardsItens>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          m={2}
          style={{ gap: 10 }}
        >
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={checkItemLeftAll}
            disabled={listLeft.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={checkItemLeft}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={checkItemRight}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={checkItemRightAll}
            disabled={listRight.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <CardsItens title="Lista Direita" cnpjs={true}>
          {listItensCheckbox(listRight)}
        </CardsItens>
      </Grid>
    </Grid>
  );
}

export default App;
