import React, { useEffect, useState } from "react";

const ScrollTop = () => {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 400) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className="scroll-container">
            <button className="scroll-container-top" onClick={scrollToTop} type="button" ><i class="fa fa-chevron-up"/></button>
        </div>
    );
};

export default ScrollTop;