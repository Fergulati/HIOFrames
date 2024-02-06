import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import Head from 'next/head';


const NEXT_PUBLIC_URL = 'https://press.logos.co/podcasts/hashing-it-out';
const SNAIL_PIC_URL = 'https://media.discordapp.net/attachments/1086277219749474424/1202079543272149052/snail_with_a_hat_japanese_scroll_ink_1.png?ex=65cc26d0&is=65b9b1d0&hm=0cc4d81ac64aeb1a2c4d61df51e4233862c002c11b13eed93291f6a25fcbcded&=&format=webp&quality=lossless&width=2422&height=1275'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click Me',
    },
  ],
  image: `${SNAIL_PIC_URL}`,
  post_url: `${SNAIL_PIC_URL}`,
});

export const metadata: Metadata = {
  title: 'Hashing It Out Sensei',
  description: 'Click to listen to HIO',
  openGraph: {
    title: 'Hashing It Out Sensei',
    description: 'Click to listen to HIO',
    images: [`${SNAIL_PIC_URL}`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
   <>
      <h1>"Hashing It Out Sensei"
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://media.discordapp.net/attachments/1086277219749474424/1202079543272149052/snail_with_a_hat_japanese_scroll_ink_1.png?ex=65cc26d0&is=65b9b1d0&hm=0cc4d81ac64aeb1a2c4d61df51e4233862c002c11b13eed93291f6a25fcbcded&=&format=webp&quality=lossless&width=2422&height=1275" />
        <meta property="fc:frame:button:1" content="Have A Listen" />
      </h1>
   </>
  );
}
