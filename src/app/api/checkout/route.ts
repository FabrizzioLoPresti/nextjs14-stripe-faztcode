import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

export const POST = async (req: NextRequest) => {
  const { origin } = new URL(req.url)
  const { priceId } = await req.json()

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    success_url: `${origin}/success`,
    cancel_url: `${origin}`
  })

  if(!session.id) {
    return NextResponse.json({
      error: "Unable to create checkout session"
    }, { status: 500 })
  }

  return NextResponse.json({
    url: session.url
  })
  // return NextResponse.redirect(new URL(session.url as string))
}