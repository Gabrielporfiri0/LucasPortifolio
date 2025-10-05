'use client';
import Link from 'next/link';



export default function PaginaDeContato() {

  const whatsappNumber = '556796198090'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre seus sites.')}`;


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    alert('Formulário enviado! (Ainda sem back-end para enviar o e-mail)');
  };

  return (
    <div className="min-h-screen bg-black text-white">
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


      <main className="container mx-auto max-w-4xl px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Entre em Contato</h1>
          <p className="mt-4 text-lg text-gray-400">Estamos prontos para ajudar a construir sua presença online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-gray-900 rounded-lg border border-green-500/30 hover:border-green-500 transition-all duration-300"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-4 group-hover:scale-110 transition-transform">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h2 className="text-2xl font-bold text-white">Contato via WhatsApp</h2>
            <p className="mt-2 text-gray-400">Clique aqui para iniciar uma conversa agora mesmo.</p>
          </a>
          
       
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500">OU</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

         
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-center mb-6">Envie-nos um E-mail</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Seu E-mail</label>
                <input
                  type="email"
                  id="email"
                  disabled
                  defaultValue="usuario.logado@email.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  placeholder="Sobre qual serviço você gostaria de falar?"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={6}
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
              </div>

              <div className="text-right">
                <button type="submit" className="px-8 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 transition">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}