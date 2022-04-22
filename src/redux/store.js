import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'Yo', likesCount: 9 },
                { id: 4, message: 'Yo', likesCount: 14 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Nazar' },
                { id: 2, name: 'Vova' },
                { id: 3, name: 'Andriy' },
                { id: 4, name: 'Ivanka' },
                { id: 5, name: 'Roma' },
                { id: 6, name: 'Ivan' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Haw is your car?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },


    getState() {
        
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;
// store - OOP 