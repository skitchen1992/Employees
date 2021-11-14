import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data , onDelete , onToggle}) => {

    return (
        <ul className="app-list list-group">
            {data.map(el => <EmployeesListItem key={el.id} {...el} onDelete={() => onDelete(el.id)}
                                               onToggle={(e) => onToggle(el.id , e.currentTarget.getAttribute("data-toggle"))}/>)}
        </ul>
    )
}

export default EmployeesList;
