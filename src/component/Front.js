import React from "react"

function Front(){
    return(
        <div
        className="grid grid-cols-2  px-10"
        style={{ height: "70vh", backgroundColor: "#e2ceed" }}
      >
        <div className="flex justify-center mx-auto items-center w-1/2 content-center">
          <div className="mx-auto">
            <div className="text-left text-3xl font-semibold">
              let's make it online
            </div>
            <div className="text-left text-2xl font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <div className="flex justify-start my-5 space-x-4">
              <button className="bg-green-700 text-white font-medium text-lg px-6 py-2 rounded-md ">
                Sign up
              </button>
              <button className="bg-white rounded-md text-green-700 border text-lg font-medium border-green-700 px-6 py-2 hover:bg-green-100 ">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex justify-center">
          <img
            src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/karmaConfidence/hero/CC+PL_DESKTOP_3x.png?auto=format"
            alt="pic"
            width={"493px"}
            height={"487px"}
          />
        </div>
      </div>
    );
}

export default Front;