import React, {FC} from 'react';
import DirectoryItems from "@/components/directory.items";
import pic1 from "../assets/images/kineme 1.jpg"
import pic2 from "../assets/images/kineme2.jpg"
import pic3 from "../assets/images/kineme 3.jpg"
import pic4 from "../assets/images/kineme 4.jpg"
import pic5 from "../assets/images/kineme 5.jpg"
import pic6 from "../assets/images/kineme 6.jpg"
import pic7 from "../assets/images/kineme 7.jpg"
import pic8 from "../assets/images/kineme 8.png"
import pic9 from "../assets/images/kineme 9.jpg"

const DirectoryPage: FC = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 pt-3.5 py-12 '}>
                BARANGAY OFFICIALS
            </h1>
            <div className={'grid grid-cols-3 justify-items-center gap-3 pl-10 pr-4'}>
            <DirectoryItems name={'Kap. Ruth Ancheta'} title={'Barangay Captain'} image={pic1}/>
            <DirectoryItems name={'Maricel Lejas'} title={'Barangay Secretary'} image={pic2}/>
            <DirectoryItems name={'Melvin Torrente'} title={'Kagawad'} image={pic3}/>
            <DirectoryItems name={'Romeo David'} title={'Kagawad'} image={pic4}/>
            <DirectoryItems name={'Omak David'} title={'Kagawad'} image={pic7}/>
            <DirectoryItems name={'Eddie Arinal'} title={'Kagawad'} image={pic8}/>
            <DirectoryItems name={'Allan Miyerkules'} title={'Desk Staff'} image={pic5}/>
            <DirectoryItems name={'Dough Dimmadome'} title={'Janitor'} image={pic6}/>
            <DirectoryItems name={'Rosie Rose Rune'} title={'Office'} image={pic9}/>
            </div>
        </div>

    );
};

export default DirectoryPage;
