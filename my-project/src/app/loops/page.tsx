"use client";

export default function Loops() {
    const numbers = [1, 2, 3, 4];
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-white">
        <h1 className="text-[29px] text-black font-bold">Loops section</h1>
        <h2 className="text-black text-4xl">Map sectionS</h2>
        {numbers.map((user)=>(
            <div className="text-black">
                {user}
            </div>
        ))}      
       </main>
  );
}
