import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebase_config = JSON.parse(PUBLIC_FIREBASE_CONFIG);

// client setup

export const app = getApps().length
    ? getApp()
    : initializeApp(firebase_config);

export const auth = getAuth();
export const db = getFirestore();

