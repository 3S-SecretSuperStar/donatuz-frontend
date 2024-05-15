import './checkbox.css';
import { ICheckboxInterface } from '../type';

const CheckBoxCom = ({text} : ICheckboxInterface) => {
    return (
        <label className="container">{text}
            <input type="checkbox" checked readOnly/>
            <span className="checkmark shadow-lg"></span>
        </label>
    );
}

export default CheckBoxCom;