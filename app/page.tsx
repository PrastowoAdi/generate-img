import { GenerateBase64 } from '@/components/generate-base64';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-5">
      <header className="max-w-screen-sm mx-auto">
        <nav className="flex flex-row items-center justify-between py-5 border-b">
          <div className="flex flex-row items-center space-x-5">
            <Image
              src="/logo.svg"
              width={78}
              height={30}
              alt="logo"
              className="object-cover"
            />
            <h1 className="font-black text-xl text-orange-500">mytools</h1>
          </div>
        </nav>
      </header>
      <section className="max-w-screen-sm mx-auto py-10">
        <GenerateBase64 />
      </section>
    </main>
  );
}
