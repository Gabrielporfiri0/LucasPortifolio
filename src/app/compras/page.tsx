'use client';

import { useState } from 'react';
import SiteCard from '@/components/SiteCard';
import Link from 'next/link';


const sitesParaVenda = [
  {
    imagem: '/images/site-mercado.jpg',
    titulo: 'E-commerce Completo',
    descricao: 'Solução completa para sua loja online, com painel de controle, gestão de estoque e pagamentos integrados.',
    valor: 1499.90,
    categoria: 'Site de Venda',
  },
  {
    imagem: '/images/site-portfolio.jpg',
    titulo: 'Portfólio Profissional',
    descricao: 'Mostre seus trabalhos de forma elegante e profissional. Ideal para fotógrafos, designers e artistas.',
    valor: 1499.90,
    categoria: 'Site Pessoal',
  },
  {
    imagem: '/images/site-streaming.jpg',
    titulo: 'Plataforma de Cursos',
    descricao: 'Lance seus cursos online com área de membros, upload de vídeos e sistema de progresso para alunos.',
    valor: 1499.90,
    categoria: 'Site de Streaming',
  },
   {
    imagem: '/images/site-blog.jpg',
    titulo: 'Blog Moderno',
    descricao: 'Crie e gerencie seu conteúdo com um blog otimizado para SEO, rápido e com design responsivo.',
    valor: 1499.90,
    categoria: 'Site de Conteúdo',
  },
];


const todasAsCategorias = ['Todos', ...new Set(sitesParaVenda.map(site => site.categoria))];


export default function PaginaDeCompras() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');


  const sitesFiltrados = categoriaSelecionada === 'Todos'
    ? sitesParaVenda
    : sitesParaVenda.filter(site => site.categoria === categoriaSelecionada);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          LP
        </Link>
        <nav className="hidden md:flex gap-4">
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
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Nossos Modelos de Sites</h1>
          <p className="mt-4 text-lg text-gray-400">Escolha a solução perfeita para o seu negócio.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {todasAsCategorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${categoriaSelecionada === categoria
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                }`
              }
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sitesFiltrados.map((site) => (
            <SiteCard
              key={site.titulo}
              imagem={site.imagem}
              titulo={site.titulo}
              descricao={site.descricao}
              valor={site.valor}
              categoria={site.categoria}
            />
          ))}
        </div>
      </main>
    </div>
  );
}