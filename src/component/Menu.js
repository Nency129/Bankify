import React from "react";

function Menu() {
  return (
    <div
      className="text-black bg-white text-3xl flex justify-center items-center"
      style={{ height: "48vh" }}
    >
      <div>
        Financial product for every step of your journey.
        <div className="flex space-x-4 space-y-8 text-left">
          <div className="my-8">
            <div style={{ backgroundColor: "#ffdcdc" }} className="rounded-md h-20 w-28 flex justify-center items-center">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Credit_Card@2x.png?auto=format%2Ccompress"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium ">Cards</span>
          </div>
          <div>
            <div style={{ backgroundColor: "#c0e1eb" }} className="rounded-md h-20 w-28 flex justify-center items-center">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Loans@2x.png?auto=format%2Ccompress"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium">Loans</span>
          </div>
          <div>
            <div style={{ backgroundColor: "#ffe4c9" }} className="rounded-md h-20 w-28 flex justify-center items-center">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Accounts@2x.png?auto=format%2Ccompress"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium">Accounts</span>
          </div>
          <div>
            <div
              style={{ backgroundColor: "#c0e1eb" }}
              className="rounded-md h-20 w-28 flex justify-center items-center"
            >
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Savings@2x.png?auto=format%2Ccompress"
                alt="jar"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium">Savings</span>
          </div>
          <div>
            <div style={{ backgroundColor: "#ffdcdc" }} className="rounded-md h-20 w-28 flex justify-center items-center">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Auto@2x.png?auto=format%2Ccompress"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium">Auto</span>
          </div>
          <div>
            <div style={{ backgroundColor: "#c8e4ce" }} className="rounded-md h-20 w-28 flex justify-center items-center">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/swimlane/Home@2x.png?auto=format%2Ccompress"
                alt=""
                width={"50px"}
                height={"50px"}
              />
            </div>
            <span className="text-lg font-medium">Home</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
