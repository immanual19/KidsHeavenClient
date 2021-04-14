import React, { useEffect, useState } from 'react';
import firebase from '../../../../node_modules/firebase';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
    let loggedInUserInfo={};
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
            localStorage.setItem('userInfo',JSON.stringify(loggedInUserInfo));
           // console.log('Logged In User Info: ',loggedInUserInfo);
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
   
            fetch('http://localhost:8080/isAdmin',{
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
        <div>
            <button onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default Login;