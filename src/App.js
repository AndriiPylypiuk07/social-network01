import React, { Component, Suspense} from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import { HashRouter } from "react-router-dom";
const DialogsContainer = React.lazy (() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy (() => import ('./components/Profile/ProfileContainer'));
const LoginPage = React.lazy (() => import ('./components/Login/Login'));
const UsersContainer = React.lazy (() => import ('./components/Users/UsersContainer'));

class App extends Component {

   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized)

      return <Preloader/>

      return (
         
         <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader/>}>
               <Routes>
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/profile/*" element={<ProfileContainer />} />
                  <Route path="/users/*" element={<UsersContainer />} />
                  <Route path="/login/*" element={<LoginPage />} />
               </Routes>
               </Suspense>
            </div>
         </div>
      )
   }
}
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
       let location = useLocation();
       let navigate = useNavigate();
       let params = useParams();
       return (
           <Component
               {...props}
               router={{ location, navigate, params }}
           />
       );
   }

   return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

let AppContainer = compose(
   withRouter,
   connect(mapStateToProps, {initializeApp}))(App);

 let SamuraiJSApp = (props) => {
  return <HashRouter>
        <Provider store={store}>
            <AppContainer />
            </Provider>
        </HashRouter>
  }

export default SamuraiJSApp;  