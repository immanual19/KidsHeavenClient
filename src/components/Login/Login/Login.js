import React, { useEffect, useState } from 'react';
import firebase from '../../../../node_modules/firebase';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
    let loggedInUserInfo={};
    const history=useHistory();
    const location=useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //console.log(user);
            fetchAdminInfo(user.email);
            loggedInUserInfo.name=user.displayName;
            loggedInUserInfo.email=user.email;
            loggedInUserInfo.photo=user.photoURL;
            loggedInUserInfo.token=token;
            loggedInUserInfo.isSignedIn=true;
            localStorage.setItem('userInfo',JSON.stringify(loggedInUserInfo));
           // console.log('Logged In User Info: ',loggedInUserInfo);
           
           history.replace(from);
           window.location.reload();
           
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    function fetchAdminInfo(email){
   
            fetch('https://tranquil-citadel-82136.herokuapp.com/isAdmin',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email})
            })
            .then(response=>response.json())
            .then(data=>{
                const userInfoFromLocalStorage=JSON.parse(localStorage.getItem('userInfo'));
                userInfoFromLocalStorage.admin=data;
                localStorage.setItem('userInfo',JSON.stringify(userInfoFromLocalStorage));
            })
    }
    return (
        
        <div className="login-page">
        <h1>Welcome to KidsHeaven</h1>
        <p>Login is now More simple than ever</p>
        <p onClick={handleGoogleSignIn} className="SignInWithGoogle"><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</p>
        </div>
 
    );
};

export default Login;