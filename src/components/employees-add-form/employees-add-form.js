import './employees-add-form.css';
import {Component} from 'react';


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "" ,
            salary: "" ,
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name , salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           name="name"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           value={name}
                           onChange={this.onChangeValue}
                    />
                    <input type="number"
                           name="salary"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           value={salary}
                           onChange={this.onChangeValue}
                    />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }


}

export default EmployeesAddForm;