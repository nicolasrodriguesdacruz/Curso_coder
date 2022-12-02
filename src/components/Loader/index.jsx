import React, { useContext } from "react";
import { BeatLoader } from "react-spinners";
import { Theme } from "../../contexts/Theme";

const Loader = () => {

    const { themeColor } = useContext(Theme);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "calc(100vh - 50px)",
            }}
        >
            <BeatLoader color={themeColor === "dark" ? "white" : "black"} size= {30}/>
        </div>
    );
};

export default Loader;