import { applyAction, deserialize } from "$app/forms";
import { invalidateAll } from "$app/navigation";
import { auth } from "$lib/firebase";
import { error, type ActionResult } from "@sveltejs/kit";

export async function aboutAction(event: { currentTarget: EventTarget & HTMLFormElement }) {

    const data = new FormData(event.currentTarget);

    if (!auth.currentUser) {
        error(400, 'Not Logged in!');
    }

    const token = await auth.currentUser.getIdToken();

    const response = await fetch(event.currentTarget.action, {
        method: 'POST',
        body: data,
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