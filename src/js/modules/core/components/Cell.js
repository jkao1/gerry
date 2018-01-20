import React from "react";
import injectSheet from "react-jss";

const styles = {
  NullCell: {
    display: "inline-block",
    height: "60px",
    width: "60px",
    color: "#fff",
    userSelect: "none",
  },
  Cell: {
    display: "inline-block",
    height: "60px",
    width: "60px",
    userSelect: "none",
  },
};

const districtColors = ["#4FC1E9", "#A0CECB", "#7DB1B1"];

const Cell = ({ classes, cell, focusedCell, onMouseDown, onMouseUp }) => {
  if (!cell) {
    return <div className={classes.NullCell} />;
  }

  const handleMouseEnter = () => {
    if (focusedCell && focusedCell.district !== cell.district) {
      cell.district = focusedCell.district;
      console.log('udpated color');
    }
  }

  return (
    <div
      className={classes.Cell}
      onMouseDown={() => onMouseDown(cell)}
      onMouseUp={onMouseUp}
      onMouseEnter={handleMouseEnter}
      style={{ backgroundColor: districtColors[cell.district] }}
    />
  );
};

export default injectSheet(styles)(Cell);
