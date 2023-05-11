import React, {FC} from 'react';

interface Props{
    clickHandler: any
}

const CancelButton: FC<Props> = ({clickHandler}) => {
    return (
        <button className={"bg-[#A50028] px-14 py-2 text-white font-medium text-2xl drop-shadow-lg"} onClick={clickHandler}>
            Cancel
        </button>
    );
};

export default CancelButton;