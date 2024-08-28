import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const modifiedRequest = new Request(event.request.url, {
        method: event.request.method,
        headers: event.request.headers,
        body: event.request.body,  // Directly pass the body
        redirect: event.request.redirect,
        credentials: event.request.credentials,
        referrer: event.request.referrer,  // Keep the referrer
        mode: event.request.mode,
        cache: event.request.cache,
        integrity: event.request.integrity,
        keepalive: event.request.keepalive,
        signal: event.request.signal,
        referrerPolicy: undefined
    });

    const response = await resolve({
        ...event,
        request: modifiedRequest,
    });

    return response;
};