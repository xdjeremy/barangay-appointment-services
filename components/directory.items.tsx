import React, {FC} from 'react';
import Image from "next/image";

interface Props {
    name: string;
    title: string
    image: any
}
const DirectoryItems: FC<Props> = ({name, title, image}) => {
    return (
        <div className={"gap-5 justify-between pt-8 w-full"}>
            <div className={"bg-gray-200 rounded-lg w-full h-24 flex flex-row px-6 py-2.5 relative"}>
                <div>
                    <Image src={image} alt={title} className={"rounded-full object-cover w-[75px] h-[75px]"} width={75} height={75}/>
                </div>
                <div className={"text-black text-3xl pl-20 pt-3"}>
                    {name}
                </div>
                <div className={"absolute bottom-0 right-3 text-black text-xl"}>
                    {title}
                </div>
            </div>
        </div>
    );
};

export default DirectoryItems;