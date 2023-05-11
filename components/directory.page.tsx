import React, {FC} from 'react';
import DirectoryItems from "@/components/directory.items";
import pic1 from "../assets/images/img1.png";
import pic2 from "../assets/images/img2.png";
import pic3 from "../assets/images/img3.png";
import pic4 from "../assets/images/img4.png";
import pic5 from "../assets/images/img5.png";
import pic6 from "../assets/images/img6.png";
import pic7 from "../assets/images/img7.png";
import pic8 from "../assets/images/img8.png";
import pic9 from "../assets/images/img9.png";
import pic10 from "../assets/images/img10.png";



const DirectoryPage: FC = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 pt-3.5 pb-6'}>
                BARANGAY OFFICIALS
            </h1>
            <div className={"border border-t-4 border-b-0 border-l-0 border-r-0 border-[#F3F3F4]"}/>
            <div className={'justify-center mx-auto w-2/5'}>
            <DirectoryItems name={'Ruth Esther Torrente-Ancheta'} title={'Barangay Captain'} image={pic1}/>
            </div>
            <div className={'grid grid-cols-3 justify-items-center text-center gap-3 pl-10 pr-4 pb-28'}>
                <DirectoryItems name={'Jasper M. Angeles'} title={'SK Chairman'} image={pic10}/>
                <DirectoryItems name={'Maricel A. Lejas'} title={'Secretary'} image={pic2}/>
                <DirectoryItems name={'Arcya Syren B. Bolano'} title={'Treasurer'} image={pic3}/>
            </div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 py-6'}>
                BARANGAY STAFFS
            </h1>
            <div className={"border border-t-4 border-b-0 border-l-0 border-r-0 border-[#F3F3F4]"}/>
            <div className={'grid grid-cols-3 justify-items-center text-center gap-3 pl-10 pr-4'}>
                <DirectoryItems name={'Eduardo V. Arinal'} title={'Kagawad'} image={pic4}/>
                <DirectoryItems name={'Ericson B. Bolanio'} title={'Kagawad'} image={pic5}/>
                <DirectoryItems name={'Fidel P. Olarte Jr.'} title={'Kagawad'} image={pic6}/>
                <DirectoryItems name={'Melvin N. Torrente Jr'} title={'Kagawad'} image={pic7}/>
                <DirectoryItems name={'Omar Friedrich L. David'} title={'Kagawad'} image={pic8}/>
                <DirectoryItems name={'Romeo V. David'} title={'Kagawad'} image={pic9}/>
            </div>
        </div>

    );
};

export default DirectoryPage;
