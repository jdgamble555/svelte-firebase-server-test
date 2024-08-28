import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const modifiedRequest = new Request(event.request.url, {
        method: event.request.method,
        headers: event.request.headers,
        body: event.request.body,
        redirect: event.request.redirect,
        credentials: event.request.credentials,
        referrer: event.request.referrer
    });

    const response = await resolve({
        ...event,
        request: modifiedRequest,
    });

    return response;
};