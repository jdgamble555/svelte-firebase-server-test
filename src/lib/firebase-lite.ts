import { PUBLIC_FIREBASE_CONFIG } from "$env/static/public";
import { error } from "@sveltejs/kit";
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebase_config = JSON.parse(PUBLIC_FIREBASE_CONFIG);


export const firebaseServer = async (request: Request) => {

    const authIdToken = request.headers.get('Authorization')?.split('Bearer ')[1];

    if (!authIdToken) {
        error(401, 'Not Logged In!');
    }

    console.log(authIdToken);

    const serverApp = initializeServerApp(firebase_config, {
        authIdToken
    });

    //const serverApp = initializeApp(firebase_config);

    // auth
    const serverAuth = getAuth(serverApp);
    await serverAuth.authStateReady();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    //console.log(serverApp.settings.authIdToken)

    //await signInAnonymously(serverAuth);

    if (serverAuth.currentUser === null) {
        error(401, 'Invalid Token');
    }

    // db
    const serverDB = getFirestore(serverApp);

    return {
        serverAuth,
        serverDB
    };
};