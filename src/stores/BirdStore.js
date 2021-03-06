import {observable, action, computed, autorun} from 'mobx';

class BirdStore {
    constructor(){
        autorun(() => {
          console.log("the birds: ", this.birdCount)
        }, {delay: 500}) // can feed a delay, errors, etc into autorun.
      }
    @observable birds = []; // when we say this is observable, mobx wraps it, listening to changes

    @action addBird = (bird) => { // action is a function that changes value of property you're observing
        this.birds.push(bird)
    }
    @computed get birdCount () { //used to access the data and perform data on it, this will
        return this.birds.length;        // access the data and perform a change on it.
    }
    // @computed get birdList () {
    //     return this.birds;       ////// this isn't needed b/c the birds list is already reached
    // }
}

const store =  new BirdStore(); // the reason we're doing this, is across our application, 
                                // we don't want many copies of the same store
                                // we know whoever imports it into another store, will be dealing with the same data
export default store;