import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    event.request.headers.delete('referer');

    const response = await resolve(event);

    return response;
};