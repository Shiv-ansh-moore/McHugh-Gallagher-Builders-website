import React from "react";

const Widgets = () => {
  return (
    <div className="ml-[4vw] mr-[4vw] mt-7 flex flex-wrap justify-evenly">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSligobuilder%2Fposts%2Fpfbid02pzTUEFG5XCFn1jW9YBJkPFsgZs7fWHfi6it68cRAQrFwSAgHWhUYWW1edpAAhFTKl&show_text=true&width=500"
        width="500"
        height="600"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      />

      <div className="w-full sm:w-[30vw]">
        <iframe
          className="w-full"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cliffoney+(McHugh%20&amp;%20Gallagher%20Builders%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
};

export default Widgets;
