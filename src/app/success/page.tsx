import Link from 'next/link';

type Props = {};

export default function SuccessPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Success Page</h2>
      <Link href="/">Go to home</Link>
    </section>
  );
}
