import React from "react";
import { IUserInterface } from "../type";

const InputCom = ({placeHolder}: IUserInterface) => {
    return (
        <input className="rounded-xl bg-custom-gradient py-4 lg:py-5 pl-2.5 lg:pl-11 text-xl lg:text-3xl" placeholder={placeHolder}/>
    );
}

export default InputCom;