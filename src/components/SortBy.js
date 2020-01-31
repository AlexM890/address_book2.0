import React from 'react'
import {sortByName, sortByEmail} from '../actions/filtersActions'
import {connect} from 'react-redux'

class SortBy extends React.Component {

changeSortBy = (e) =>{
    const sortBy = e.target.value
    if(sortBy === "name"){
        this.props.sortByName()
    }else if(sortBy === "email"){
        this.props.sortByEmail()
    }
    console.log(e.targer)
}

    render(){
        return (
        <div>
            <select className="form-control col-3" onChange={this.changeSortBy}>
                <option value="name">Name</option>
                <option value="email">Email</option>
            </select>
        </div>
        )

    }
}


const mapDispatchToProps = (dispatch) => ({
    sortByName: () => dispatch(sortByName()),
    sortByEmail: () => dispatch(sortByEmail())
})

export default connect(undefined, mapDispatchToProps)(SortBy)
