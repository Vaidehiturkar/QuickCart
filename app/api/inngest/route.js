import { serve } from "inngest/next";
import { createUserOrder,inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "./config/inngest"; // Corrected import path

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder
  ],
});
