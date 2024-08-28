import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const modifiedRequest = new Request(event.request.url, {
        method: event.request.method,
        headers: event.request.headers,
        body: event.request.method !== 'GET' && event.request.method !== 'HEAD' ? await event.request.text() : undefined,
        redirect: event.request.redirect,
        credentials: event.request.credentials,
        referrer: event.request.referrer,  // Keep the referrer
        referrerPolicy: 'strict-origin-when-cross-origin'
    });

    // Use the modified request in the resolve call
    const response = await resolve({
        ...event,
        request: modifiedRequest,
    });

    return response;




       // 
   


};