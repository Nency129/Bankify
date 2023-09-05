import React from "react";

function Third() {
  return (
    <div className="grid grid-cols-2" style={{ height: "100vh" }}>
      <div style={{ backgroundColor: "#c8e4ce" }}>
        <div className="flex justify-center items-center py-10 w-1/2 mx-auto">
          <div className="flex-col space-y-4 ">
            <img
              src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/ck_money_steps.png?auto=format%2Ccompress"
              alt=""
              height={"300px"}
              width={"350px"}
            />
            <div>
              <div className="text-3xl text-left">
                Build credit
              </div>
              <div className="text-3xl  text-left">
                the easy way.
              </div>
            </div>
            <div className="text-xl text-left mx-auto ">
              You could increase a low credit score by an average of 21 points
              in 4 days with Credit Builder.
            </div>
            <button className="bg-green-700 text-white text-lg font-medium rounded-md px-6 py-2 flex justify-start">
              Start now
            </button>
            <div className="text-xs text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#ffe4c9" }}>
        <div className="flex justify-center items-center py-10 w-1/2 mx-auto">
          <div className="flex-col space-y-4 ">
            <img
              src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/Relief_Roadmap@2x.png?auto=format%2Ccompress"
              alt=""
              height={"300px"}
              width={"350px"}
            />
            <div>
              <div className="text-3xl text-left">
                Get the personalized
              </div>
              <div className="text-3xl  text-left">
                relief you need.
              </div>
            </div>
            <div className="text-xl text-left mx-auto ">
              Relief roadmap connects you to government support and personalized
              debt relief options.
            </div>
            <button className="bg-green-700 text-white text-lg font-medium rounded-md px-6 py-2 flex justify-start">
              See Your Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
