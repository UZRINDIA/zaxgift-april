
// // app/api/track-order/route.js

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { orderId, email } = body;

//     // Mock logic
//     if (orderId === "12345" && email === "test@example.com") {
//       return Response.json({
//         orderId: "12345",
//         status: "Shipped",
//         estimatedDelivery: "May 5, 2025",
//       });
//     }

//     return new Response(JSON.stringify({ message: "Order not found" }), {
//       status: 404,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }
