import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
     <div className="font-bold text-3xl block text-black cursor-pointer">
      <a href="/age">Age section</a>
      <a href="/quiz">Quiz section</a>
     </div>

   
    </main>
  );
}
