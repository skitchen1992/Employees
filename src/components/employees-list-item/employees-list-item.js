import './employees-list-item.css';


const EmployeesListItem = (props) => {

    const {name , salary , onDelete , onToggle, increase , rise} = props

    const isIncrease = increase && 'increase'
    const isLike = rise && 'like'

    return (
        <li className={`list-group-item d-flex justify-content-between ${isIncrease} ${isLike}`}>
            <span onClick={onToggle} data-toggle='rise' className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary} $`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggle} type="button"
                        data-toggle='increase'
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;
