import { IButtonInterface } from "../type";

const ButtonCom = ({bgColor, text}: IButtonInterface) => {
    return(
        <>
            <button className={`text-white bg-${bgColor} text-lxl lg:text-3xl py-3.5 lg:py-5 w-full text-center rounded-xl`}>{ text }</button>
        </>
    );
}

export default ButtonCom;