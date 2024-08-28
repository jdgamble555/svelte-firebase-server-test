import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const { request } = event;
    const headers = new Headers(request.headers);
    headers.delete('referer');

    // Create a new Request with the updated headers
    event.request = new Request(request.url, {
        method: request.method,
        headers,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
        redirect: request.redirect,
        credentials: request.credentials,
        referrerPolicy: 'strict-origin-when-cross-origin'
    });

    // Proceed with the modified request
    const response = await resolve(event);

    return response;
};