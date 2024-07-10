import Dashboard from "@/components/Dashboard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Merapi Jogja Dashboard</title>
        <meta name="description" content="Dashboard untuk monitoring aktivitas Gunung Merapi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Dashboard />
      </main>
    </div>
  );
}
