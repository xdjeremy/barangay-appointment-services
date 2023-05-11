import React, { FC } from "react";

interface Props {
  clickHandler: () => void;
}

const ConfirmButton: FC<Props> = ({ clickHandler }) => {
  return (
    <button
      onClick={() => clickHandler()}
      className={
        "bg-[#039500] px-14 py-2 text-2xl font-medium text-white drop-shadow-lg"
      }
    >
      Confirm
    </button>
  );
};

export default ConfirmButton;