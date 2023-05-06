import React, { FC } from "react";

interface Props {
  docs: string;
  email: string;
}

const AdminTableItems: FC<Props> = ({ docs, email }) => {
  return (
    <tr>
      <td className={"border-2 border-black text-center"}>{docs}</td>
      <td className={"border-2 border-black text-center"}>{email}</td>
      <td className={"border-2 border-black text-center"}>
        <input type={"checkbox"} />
      </td>
    </tr>
  );
};

export default AdminTableItems;
