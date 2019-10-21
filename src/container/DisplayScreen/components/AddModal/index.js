import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add_log} from '../../../../redux/actions'


export class index extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            user: '',
            password: '', 
            food: ''
        };
        
      }
    handleChange = (e) => {
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }
    submitUser =(e) => {
        e.preventDefault()
        this.props.add_log(this.state.user, this.state.password, this.state.food)
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Add user
                </button>


                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Create New User</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body d-flex flex-column p-5">
                                <span className="d-flex flex-row pb-1">Username</span>
                                <input 
                                    type="text" 
                                    placeholder="Who is they?"
                                    className=" mb-2 input" 
                                    name="user"
                                    onChange={this.handleChange} 
                                    value={this.state.user}
                                />
                                
                                <span className="d-flex flex-row pb-1">Password</span>
                                <input 
                                    type="text" 
                                    className="input mb-2"
                                    placeholder="What's their secret code?"
                                    name="password"
                                    onChange={this.handleChange} 
                                    value={this.state.password}
                                />

                                <span className="d-flex flex-row pb-1">Favourite Food</span>
                                <input 
                                    type="text" 
                                    className="input mb-4"
                                    placeholder="What's their favorite food?"
                                    name="food"
                                    onChange={this.handleChange} 
                                    value={this.state.food}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.submitUser.bind(this)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({  
    credentials: state.display.credentials
})

export default connect(mapStateToProps, {add_log})(index)
