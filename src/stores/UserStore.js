import {observable, action, computed, autorun} from 'mobx';

class UserStore {
    constructor(){
        autorun(() => {
            if(this.user.username){
                console.log("Welcome: ", this.user)
            }
        })
      }
    @observable user = {}; // when we say this is observable, mobx wraps it, listening to changes

    @action setUser = (user) => { // action is a function that changes value of property you're observing
        this.user = user;
    }
    @computed get getUserInfo () { //used to access the data and perform data on it, this will
        return this.user;        // access the data and perform a change on it.
    }
}

const store =  new UserStore(); // the reason we're doing this, is across our application, 
                                // we don't want many copies of the same store
                                // we know whoever imports it into another store, will be dealing with the same data
export default store;