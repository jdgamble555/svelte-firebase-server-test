
import { firebaseServer } from '$lib/firebase-lite';
import { doc, getDoc } from 'firebase/firestore/lite';
import type { Actions } from './$types';

type AboutDoc = {
    name: string;
    description: string;
};

// endpoint for '/about'

export const actions = {

    default: async ({ request }) => {

        // login with token
        const { serverDB } = await firebaseServer(request);

        // get about document
        const aboutSnap = await getDoc(
            doc(serverDB, '/about/ZlNJrKd6LcATycPRmBPA')
        );

        if (!aboutSnap.exists()) {
            throw 'Document does not exist!';
        }

        return {
            data: aboutSnap.data() as AboutDoc
        };
    }

} satisfies Actions;