import React from "react";
import { IUserInterface } from "../type";

const InputCom = ({placeHolder}: IUserInterface) => {
    return (
        <input className="shadow-lg block rounded-xl bg-transparent bg-custom-gradient py-2 lg:py-2 pl-2.5 lg:pl-11 text-xl lg:text-xl" placeholder={placeHolder}/>
    );
}

export default InputCom;