import React from "react";


function HeaderBackground() {

    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
        const updateScroll = () => {
            let windowScrollTop = window.pageYOffset / 3;
            pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
            window.removeEventListener("scroll", updateScroll);
        };
        } 
    });
    return (
        <>
            <div
                className="page-header-image"
                style={{
		top: -77,
                backgroundImage: "url(" + require("../assets/img/norway.jpg") + ")"
                }}
                ref={pageHeader}
            ></div>
        </>
    );
};

export default HeaderBackground;
