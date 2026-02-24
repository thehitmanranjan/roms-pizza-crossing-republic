import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, mobile, consent } = body;

    // Validate required fields
    if (!fullName || !email || !mobile || !consent) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Add your database connection here
    // Example:
    // await db.subscriptions.create({
    //   data: {
    //     fullName,
    //     email,
    //     mobile,
    //     consent,
    //     createdAt: new Date(),
    //   },
    // });

    console.log("Subscription received:", { fullName, email, mobile, consent });

    return NextResponse.json(
      { 
        success: true, 
        message: "Subscription successful" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
