import React from "react";

const Widgets = () => {
  return (
    <div className="ml-[4vw] mr-[4vw] mt-7 flex justify-center">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FSligobuilder%2Fvideos%2F1187026852594236%2F&show_text=false&width=267&t=13"
        width="267"
        height="476"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowfullscreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Widgets;
