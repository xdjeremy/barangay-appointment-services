import React from "react";

const NewsPagePage = () => {
  return (
    <div>
      <h1 className={"px-4 py-3.5 text-right text-5xl font-bold text-black "}>
        NEWS
      </h1>
      <div className={"m-8 flex h-[940px] flex-col gap-8 bg-green-100 pt-6"}>
        <div className={"mx-8 h-1/2 rounded-lg bg-gray-200"}>
          <div className={"flex flex-row justify-between"}>
            <div className={"px-3.5 py-2.5 text-3xl font-medium text-black"}>
              Timor-Leste denies Teves&apos; asylum request:DFA
            </div>
            <div className={"px-3.5 py-2.5 text-xl font-medium text-black"}>
              May 09, 2023
            </div>
          </div>
          <div className={"px-3.5 py-6 text-left text-2xl text-black"}>
            MANILA — Timor-Leste has denied the asylum request of Rep. Arnolfo
            Teves, Jr., the Department of Foreign Affairs (DFA) said Tuesday
            night. &lsquo;Today, the Ministry of Interior of Timor-Leste
            confirmed that Representative Teves&aposl; application for political
            asylum has been denied,&rsquo; the DFA said in a statement.
            &lsquo;In accordance with the decision of the Timor-Leste
            Government, Representative Teves has been granted a period of five
            (5) days to depart Timor-Leste. During this time, he also has the
            option to file an appeal regarding the decision,&rsquo; it said.
          </div>
          <div className={"px-3.5 py-2.5 text-left text-2xl text-black"}>
            Teves entered Timor-Leste about a week ago in an attempt to secure
            special asylum status, according to Justice Secretary Jesus Crispin
            Remulla, citing information from the DFA and the Philippine
            Ambassador to Timor-Leste.
          </div>
          <div
            className={
              "flex flex-row px-3.5 pt-16 text-left text-2xl text-black"
            }
          >
            continue to read more at:
            <div className={" px-1 underline underline-offset-4"}>
              <a
                href="https://news.abs-cbn.com/news/05/09/23/timor-leste-denies-teves-asylum-request-dfa"
                target={"_blank"}
              >
                https://news.abs-cbn.com/news/05/09/23/timor-leste-denies-teves-asylum-request-dfa
              </a>
            </div>
          </div>
        </div>
        <div className={"mx-8 h-1/2 rounded-lg bg-gray-200"}>
          <div className={"px-3.5 py-48 text-3xl font-medium text-black"}>
            Updates here...
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPagePage;