import React, { FC } from "react";
import { format } from "date-fns";

interface Props {
  name: string;
  type: string;
  date: string;
}
const DeletedTableItem: FC<Props> = ({name, type, date}) => {
    return (
        <tr>
            <td className={"border-2 border-black text-center"}>{name}</td>
            <td className={"border-2 border-black text-center"}>{type}</td>
            <td className={"border-2 border-black text-center"}>{format(new Date(date), 'MMMM dd yyyy')}</td>
        </tr>
    );
};

export default DeletedTableItem;
