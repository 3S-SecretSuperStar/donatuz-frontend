import './checkbox.css';
import { ICheckboxInterface } from '../type';

const CheckBoxCom = ({text} : ICheckboxInterface) => {
    return (
        <label className="container">{text}
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
}

export default CheckBoxCom;