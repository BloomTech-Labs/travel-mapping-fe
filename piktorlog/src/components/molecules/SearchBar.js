import React from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import search from '../../store/actions/searchBar';
class SearchBar extends React.Component {
    constructor(props){
        super(props);
            this.state ={

              searchInput: ''

            }
            //this.onSearchChange = props.onSearchChange;

            this.changeHandler = (e)=> {
            
              this.setState({ [e.target.name]: e.target.value }); 

              console.log("state in searchbar", this.state)
            }
           
     }



render(){
        return (
            <div className="container">
                <div className="row">
                   <div className="col-10 mx-auto mt-5 text center">
                                <div className="searchBar">
                                            
                                        <form >
                                            
                                            <input
                                            type="search"
                                    
                                            placeholder="searh for Album"
                                            name="searchInput"
                                            className="form-control"
                                            onChange={this.props.changeHandler}

                                            value ={this.state.searchInput}
                                            />

                                        </form>
                                        
                                       
                                       
                                        </div>      
                            </div>
                    </div>
            </div>
        )
    }
    
}


const mapStateToProps = state => {
  return {
    state: state,
    //searchInput: state.searchInput
  }
}

export default connect(mapStateToProps, {search})(SearchBar);




