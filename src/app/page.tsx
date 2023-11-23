import PriceCard from '@/components/price-card';

const fetchPrices = async () => {
  const res = await fetch('http://localhost:3000/api/prices');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const { prices } = await res.json();
  return prices;
};

export default async function Home() {
  const prices = await fetchPrices();
  return (
    <main className="mx-auto max-w-7xl min-h-screen flex flex-col items-center justify-center gap-y-12">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="flex flex-row gap-x-6">
        {prices.map((price: any) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </main>
  );
}
