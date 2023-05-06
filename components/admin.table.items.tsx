import React, {FC} from 'react';

interface Props {
    docs: string
    name: string
    email: string
    validate: string
}

const AdminTableItems: FC<Props> = ({docs, name, email, validate}) => {
    return (
        <tr>
            <td className={"border-2 border-black text-center"}>{docs}</td>
            <td className={"border-2 border-black text-center"}>{name}</td>
            <td className={"border-2 border-black text-center"}>{email}</td>
            <td className={"border-2 border-black text-center"}>{validate}</td>
        </tr>

    );
};

export default AdminTableItems;