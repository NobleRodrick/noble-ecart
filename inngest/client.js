import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "noble-ecart",
    signingKey: process.env.INNGEST_SIGNING_KEY,
 });