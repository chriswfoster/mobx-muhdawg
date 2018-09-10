import {observable, action, computed} from 'mobx';

class BirdStore {
    @observable birds = []; // when we say this is observable, mobx wraps it, listening to changes

    @action addBird = (bird) => { // action is a function that changes value of property you're observing
        this.birds.push(bird)
    }
    @computed get birdCount () { //used to access the data and perform data on it, this will
        return this.birds.size;        // access the data and perform a change on it.
    }
}

const store =  new BirdStore(); // the reason we're doing this, is across our application, 
                                // we don't want many copies of the same store
                                // we know whoever imports it into another store, will be dealing with the same data
export default store;