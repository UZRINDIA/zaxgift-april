// // now connect api with inngest

// import { serve } from "inngest/next";
// import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//     client: inngest,
//     functions: [
//         // functions that will be handled by inngest
//         syncUserCreation,
//         syncUserUpdate,
//         syncUserDeletion
//     ],
// });