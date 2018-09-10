import React, {Component} from 'react'
import {inject, observer} from 'mobx-react';

@inject ('UserStore')
@observer
class NavBar extends Component {

    changeHandler = (e) => {
        e.preventDefault()
        this.props.UserStore.setUser({username: e.target.value})
    }

    render(){
        const user = this.props.UserStore.user
        return(
            <div>
                {user.username ? <p>Hello {user.username}</p> : ""}

                <input onChange={e => this.changeHandler(e)}/>
            </div>
        )
    }
}
export default NavBar