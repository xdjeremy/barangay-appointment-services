import React, { FC } from "react";

interface Props {
  official: string;
  email: string;
}
const AppointmentTableItems: FC<Props> = ({official, email}) => {
    return (
        <tr>
            <td className={"border-2 border-black text-center"}>{official}</td>
            <td className={"border-2 border-black text-center"}>{email}</td>
            <td className={"border-2 border-black text-center"}>
                <input type={"checkbox"} />
            </td>
        </tr>
    );
};

export default AppointmentTableItems;