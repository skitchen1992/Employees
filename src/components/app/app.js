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
                {name: "dic" , salary: 800 , increase: false , rise: true , id: v1()} ,
                {name: "nik" , salary: 80 , increase: false , rise: true , id: v1()} ,
                {name: "pig" , salary: 8005 , increase: false , rise: true , id: v1()} ,
                {name: "et" , salary: 8040 , increase: false , rise: true , id: v1()} ,
            ] ,
            term: "" ,
            filter: "All"
        }
    }

    deleteList = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(el => el.id !== id)}
        })
    }


    addList = (e , name , salary) => {
        e.preventDefault()
        this.setState(({data}) => {
            return {data: [...data , {name , salary , increase: false , rise: false , id: v1()}]}
        })
    }

    onToggle = (id , prop) => {
        this.setState(({data}) => (
            {
                data: data.map((item) => {
                    return item.id === id ? {...item , [prop]: !item[prop]} : item
                })
            }
        ))
    }

    searchEmp = (data , term) => {
        if (!term) {
            return data
        }
        return data.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items , filter) => {
        switch (filter) {
            case 'Rise':
                return items.filter(item => item.rise)
            case 'MoreThen1000':
                return items.filter(item => item.salary > 1000)
            default :
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const {data , term , filter} = this.state
        const employees = data.length
        const increased = data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data , term) , filter)
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
                </div>

                <EmployeesList data={visibleData} onDelete={this.deleteList} onToggle={this.onToggle}/>
                <EmployeesAddForm onAddList={this.addList}/>
            </div>
        );
    }
}

export default App;
