import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    
    <div className="font-sans grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen  pb-20 gap-0 ">
      <header className="w-full flex items-center justify-between px-8 py-4 bg-black">
        <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          LP
        </Link>
        <nav className="flex gap-4">
          <Link href="/compras" className="px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition">
            Produtos
          </Link>
          <Link href="/contato" className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition">
            Contato
          </Link>
        </nav>
        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 transition">
            Registre-se
          </button>
          <button className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 transition">
            Login
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full ">
      <section
      
  className="relative w-full h-screen bg-cover bg-center "
  style={{ backgroundImage: "url('/fundo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="absolute inset-0 bg-white/40"></div>
  <h1
    className="absolute top-1/2 right-8 max-w-[30%] text-center text-6xl font-light text-black p-4 rounded-md break-words"
    style={{ transform: 'translateY(-50%)' }}>
    SOU O LUCAS, SEU AMIGÃO
  </h1>
</section>

  <section className="py-12 w-full bg-black">
    <h2 className="text-6xl text-center text-white mb-12 glitch-effect">
      SOBRE NÓS
    </h2>

    <div className="grid max-w-[65%] mx-auto grid-cols-1 sm:grid-cols-2 gap-12  px-4">
      {[
        { src: '/foto1.jpg', alt: 'Lindsay', name: 'Lindsay', desc:'Desenvolvedora back-end com 6 anos de experiência na construção de APIs robustas e escaláveis utilizando Node.js e Python (Django).' },
        { src: '/foto2.jpg', alt: 'Derek', name: 'Derek', desc: 'Especialista em criar interfaces de usuário ricas e responsivas com mais de 8 anos de experiência.' },
        { src: '/foto4.jpg', alt: 'John', name: 'John', desc:'Programador versátil com 5 anos de experiência, atuando em todas as camadas do desenvolvimento de aplicações web.' },
        { src: '/foto3.jpg', alt: 'Arny', name: 'Arny', desc:'Profissional com 7 anos de experiência em automação de infraestrutura e otimização de pipelines de CI/CD.' },
      ].map(({ src, alt, name, desc }) => (
        <div
          key={name}  
          className="max-w-md bg-gray-700 rounded-lg p-6 flex m-10 gap-8 border"
        >
          <div className="relative w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
          <div className="w-full text-center"> 
            <p className="text-white font-semibold text-lg">{name}</p>
            <div>
              <p className="text-base">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}