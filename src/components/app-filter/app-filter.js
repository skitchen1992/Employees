import "./app-filter.css";

const AppFilter = ({onFilterSelect,filter}) => {

    const buttonsData = [
        {name: "All" , label: "Все сотрудники"} ,
        {name: "Rise" , label: "На повышение"} ,
        {name: "MoreThen1000" , label: "З/П больше 1000$"} ,
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name
        const clazz = active ? "btn-light" : "btn-outline-light"
        return (
            <button key={name}
                onClick={() => onFilterSelect(name)} type="button"
                className={`btn ${clazz}`}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;