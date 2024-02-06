import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_URL = 'https://press.logos.co/podcasts/hashing-it-out';
const SNAIL_PIC_URL = 'https://media.discordapp.net/attachments/1086277219749474424/1202079543272149052/snail_with_a_hat_japanese_scroll_ink_1.png?ex=65cc26d0&is=65b9b1d0&hm=0cc4d81ac64aeb1a2c4d61df51e4233862c002c11b13eed93291f6a25fcbcded&=&format=webp&quality=lossless&width=2422&height=1275'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `🌲 ${accountAddress} 🌲`,
        },
      ],
      image: `${SNAIL_PIC_URL}`,
      post_url: `${NEXT_PUBLIC_URL}`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
