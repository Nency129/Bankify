import React from "react";

function Sixth() {
  return (
    <div style={{ height: "70vh"}}>
      <div className="grid grid-cols-2 space-y-32">
        <div className=" text-2xl text-left font-medium w-1/2 mx-auto my-auto">
          We've got you covered.
        </div>
        <div className="space-y-3 w-1/2 mx-auto">
          <div className="flex space-x-4">
            <div><img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/benefitPillar/Lock@2x.png?auto=format%2Ccompress" alt="" /></div>
            <div className="text-left text-lg">
                <h6 className="font-medium">We treat your data like it's our own.</h6>
                <p>We don't share your personal information with unaffiliated third parties for their own advertising or marketing purposes.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div><img src="https://ck-content.imgix.net/res/content/bundles/homepage/2.9.0/assets/benefitPillar/Security@2x.png?auto=format%2Ccompress" /></div>
            <div className="text-left text-lg"><h6 className="font-medium">We take your security seriously.</h6>
            <p>We use 128-bit or higher encryption to protect during the transmission of your data to our site.</p></div>
          </div>
        </div>
      </div>
      <div className="text-sm text-center mx-auto my-auto w-3/4 mt-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    </div>
  );
}

export default Sixth;
