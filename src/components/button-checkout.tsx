'use client';

import { useRouter } from 'next/navigation';

type Props = {
  priceId: string;
};

const ButtonCheckout = ({ priceId }: Props) => {
  const router = useRouter();

  const checkout = async (priceId: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();

    if (data.error) {
      console.error(data.error);
      return;
    }

    router.push(data.url);
  };

  return (
    <button
      className="bg-slate-500 text-white rounded-md px-4 py-2 mt-2"
      onClick={() => checkout(priceId)}
    >
      Buy
    </button>
  );
};

export default ButtonCheckout;
