import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete}) => {

    return (
        <ul className="app-list list-group">
            {data.map(el => <EmployeesListItem key={el.id} {...el} onDelete={onDelete}  />)}
        </ul>
    )
}

export default EmployeesList;
