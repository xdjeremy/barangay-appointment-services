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
            <div className={"bg-gray-200 rounded-lg w-full h-24 flex flex-row px-6 py-2.5"}>
                <div>
                    <Image src={image} alt={title} className={"rounded-full object-cover w-[75px] h-[75px]"}
                           width={75} height={75}/>
                </div>
                <div className={"flex flex-col pl-20"}>
                    <div className={"text-center text-black text-3xl pt-1"}>
                        {name}
                    </div>
                    <div className={"text-center text-black text-xl"}>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectoryItems;