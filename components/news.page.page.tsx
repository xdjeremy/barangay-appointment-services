import React from 'react';

const NewsPagePage = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 py-3.5 '}>
                NEWS
            </h1>
            <div className={"flex flex-col gap-8 bg-green-100 m-8 pt-6 h-[940px]"}>
                <div className={"bg-gray-200 mx-8 h-1/2 rounded-lg"}>
                    <div className={"justify-between flex flex-row"}>
                        <div className={"text-black font-medium px-3.5 py-2.5 text-3xl"}>
                            Timor-Leste denies Teves' asylum request:DFA
                        </div>
                        <div className={"text-black font-medium px-3.5 py-2.5 text-xl"}>
                            May 09, 2023
                        </div>
                    </div>
                    <div className={"text-black px-3.5 py-6 text-2xl text-left"}>
                        MANILA — Timor-Leste has denied the asylum request of Rep. Arnolfo Teves, Jr., the Department of
                        Foreign Affairs (DFA) said Tuesday night.
                        "Today, the Ministry of Interior of Timor-Leste confirmed that Representative Teves' application
                        for political asylum has been denied," the DFA said in a statement.
                        "In accordance with the decision of the Timor-Leste Government, Representative Teves has been
                        granted a period of five (5) days to depart Timor-Leste. During this time, he also has the
                        option to file an appeal regarding the decision," it said.
                    </div>
                    <div className={"text-black px-3.5 py-2.5 text-2xl text-left"}>
                        Teves entered Timor-Leste about a week ago in an attempt to secure special asylum status,
                        according to Justice Secretary Jesus Crispin Remulla, citing information from the DFA and the
                        Philippine Ambassador to Timor-Leste.
                    </div>
                    <div className={"text-black px-3.5 pt-16 text-2xl text-left flex flex-row"}>
                        continue to read more at:
                        <div className={" underline underline-offset-4 px-1"}>
                            <a href="https://news.abs-cbn.com/news/05/09/23/timor-leste-denies-teves-asylum-request-dfa"
                               target={"_blank"}>https://news.abs-cbn.com/news/05/09/23/timor-leste-denies-teves-asylum-request-dfa</a>
                        </div>
                    </div>
                </div>
                <div className={"bg-gray-200 mx-8 h-1/2 rounded-lg"}>
                    <div className={"text-black font-medium px-3.5 py-48 text-3xl"}>
                        Updates here...
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsPagePage;