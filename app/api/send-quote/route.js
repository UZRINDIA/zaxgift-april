export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Log to console (for demo)
    console.log("Quote received:", { name, email, message });

    // You can also send this data to an email service (Formspree, EmailJS) later
    return new Response(
      JSON.stringify({ success: true, message: "Quote received successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
