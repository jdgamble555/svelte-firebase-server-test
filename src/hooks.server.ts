import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const modifiedRequest = new Request(event.request.url, {
        ...event.request,
        referrerPolicy: undefined
    });

    const response = await resolve({
        ...event,
        request: modifiedRequest,
    });

    return response;
};