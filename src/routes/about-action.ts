import { applyAction, deserialize } from "$app/forms";
import { invalidateAll } from "$app/navigation";
import { useFirebase } from "$lib/firebase";
import { error, type ActionResult } from "@sveltejs/kit";
import type { Auth } from "firebase/auth";

export async function aboutAction(
    event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
    auth: Auth
) {
    event.preventDefault();

    if (!auth.currentUser) {
        error(400, 'Not Logged in!');
    }

    const token = await auth.currentUser.getIdToken();

    const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: '',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const result: ActionResult = deserialize(await response.text());

    if (result.type === 'success') {
        await invalidateAll();
    }

    applyAction(result);
}