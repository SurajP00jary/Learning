import Image from "next/image";

export default function Home() {
  return (
    <main className="block min-h-screen  items-center justify-between p-24 bg-white">
     <div className="font-bold text-3xl flex flex-col text-black cursor-pointer">
      <a href="/age">Age section</a>
      <a href="/quiz">Quiz section</a>
      <a href="/loops">Loop section</a>
      <a href="/products">Products section</a>
     </div>

   
    </main>
  );
}
