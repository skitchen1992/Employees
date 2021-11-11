import AppInfo from '../app-info/app-info';
import {Component} from 'react';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {v1} from "uuid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "dic" , salary: 800 , id: v1()} ,
                {name: "nik" , salary: 80 , id: v1()} ,
                {name: "pig" , salary: 8005 , id: v1()} ,
                {name: "et" , salary: 8040 , id: v1()} ,
            ]
        }
    }

    deleteList = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(el => el.id !== id)}
        })
    }


    addList = (e , name , salary) => {
        e.preventDefault()
        console.log(name , salary)
        this.setState(({data}) => {
            return {data: [...data , {name , salary , id: v1()}]}
        })
    }


    render() {
        const {data} = this.state
        console.log()
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={data} onDelete={this.deleteList}/>
                <EmployeesAddForm onAddList={this.addList}/>
            </div>
        );
    }
}

export default App;
