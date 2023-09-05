import React from "react";

function Fourth() {
  return (
    <div className="bg-white grid grid-cols-2" style={{ height: "60vh" }}>
      <div className="text-left mx-auto my-auto px-2">
        <h1>Financial progress</h1>
        <h1>starts with credit</h1>
        <h1>health.</h1>
      </div>
      <div className="flex-col space-y-6 w-1/2 mx-auto my-auto">
        <div className="flex space-x-4">
          <img
            src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/benefitPillar/Credit_Monitoring@2x.png?auto=format%2Ccompress"
            alt="" className="my-auto mx-auto h-12 w-16" 
          />
          <div className="text-left text-lg">
            <div className="font-medium">Credit monitoring</div>
            <div>Get alerted to important changes to your reports</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <img
            src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/benefitPillar/Insights@2x.png?auto=format%2Ccompress"
            alt="" className="my-auto mx-auto h-12 w-16"
          />
          <div className="text-left text-lg">
            <div className="font-medium">Insights</div>
            <div>
              Learn what affects your scores and what you can do to improve
              them.
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <img
            src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/benefitPillar/Better_Decision@2x.png?auto=format%2Ccompress"
            alt=""   className="my-auto mx-auto h-12 w-16"
          />
          <div className="text-left text-lg ">
            <div className="font-medium">Better decisions</div>
            <div>
              Get personalized recommendations for ways to use your credit more wisely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
