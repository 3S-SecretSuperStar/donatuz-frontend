import { IButtonInterface } from "../type";
import google from "../Images/Google.svg";
import twitter from "../Images/twitter.svg";

const ButtonCom = ({bgColor, text, icon}: IButtonInterface) => {
    return(
        <>
            <div className={`shadow-lg text-white ${bgColor} transition-all justify-center items-center text-xl lg:text-xl py-3.5 lg:py-3.5 w-full rounded-xl flex cursor-pointer`}>
                {
                    icon ? icon === "google" ? 
                    <img src={google} alt="btn-img" className="w-5 h-5"/>
                    : <img src={twitter} alt="btn-img" className="w-5 h-5"/> : ""
                }
                <span className="text-center ml-3">{ text }</span>
            </div>
        </>
    );
}

export default ButtonCom;