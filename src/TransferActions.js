import { useState } from "react";

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const TransferActions = () => {
  const [checked, setChecked] = useState([]);
  const [listLeft, setListLeft] = useState([
    { id: 1, name: "teste1" },
    { id: 2, name: "teste2" },
    { id: 3, name: "teste3" },
    { id: 4, name: "teste4" },
    { id: 5, name: "teste5" },
  ]);
  const [listRight, setListRight] = useState([]);
  const leftChecked = intersection(checked, listLeft);
  const rightChecked = intersection(checked, listRight);

  const removerItemList = (vetorA, vetorB) => {
    return vetorA.filter((value) => vetorB.indexOf(value) === -1);
  };

  const checkItemLeft = () => {
    setListRight(listRight.concat(leftChecked));
    setListLeft(removerItemList(listLeft, leftChecked));
    setChecked([]);
  };

  const checkItemRight = () => {
    setListLeft(listLeft.concat(rightChecked));
    setListRight(removerItemList(listRight, rightChecked));
    setChecked([]);
  };

  const checkItemLeftAll = () => {
    setListRight(listRight.concat(listLeft));
    setListLeft([]);
  };

  const checkItemRightAll = () => {
    setListLeft(listLeft.concat(listRight));
    setListRight([]);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.findIndex((elem) => elem.id === value.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return {
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
  };
};

export default TransferActions;
