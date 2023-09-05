import React from "react";

function Fivth() {
  return (
    <div className="border ">
      <div className="grid grid-cols-2">
        <div className="w-50">
          <img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/Download_App_Desktop@2x.png?auto=format%2Ccompress" />
        </div>
        <div className="flex justify-center items-center w-1/2 mx-auto">
          <div className="flex-col space-y-3 text-left px-2">
            <h1 >Get started.</h1>
            <div className="text-lg text-left">
              Download the app and join over 100 million members making
              financial progress.
            </div>
            <div className="flex justify-start space-x-5">
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/apple_app_store@2x.png?auto=format%2Ccompress"
                alt="" width={"135px"} 
              />
              <img
                src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/google_play_store@2x.png?auto=format%2Ccompress"
                alt="" width={"135px"} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center w-1/2 mx-auto ">
          <div className="flex-col space-y-3 px-2">
        
              <h1 className="text-left">Articles and resources.</h1>
              <div className="text-lg text-left">
                Editorial insights to help you reach your financial goals.
              
            </div>
            <button className="bg-green-700 text-white text-lg font-medium rounded-md px-6 py-2 flex justify-start">
              Read More
            </button>
          </div>
        </div>
        <div>
          <img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/Editorial_Desktop@2x.png?auto=format%2Ccompress" />
        </div>
      </div>
    </div>
  );
}

export default Fivth;
