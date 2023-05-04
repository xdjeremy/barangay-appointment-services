import React from 'react';

const NewsPage = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 py-3.5 '}>
                NEWS
            </h1>
            <div className={"flex flex-col gap-8 bg-green-100 m-8 pt-6 h-[940px]"}>
                <div className={"bg-gray-200 mx-8 h-1/2 "}>
                    News here....

                </div>
                <div className={"bg-gray-200 mx-8 h-1/2"}>
                    News here....

                </div>
            </div>
        </div>
    );
};

export default NewsPage;