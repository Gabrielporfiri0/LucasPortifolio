'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function PagamentoPage() {
 
  const [paymentMethod, setPaymentMethod] = useState('pix');
  
  const [copied, setCopied] = useState(false);

  
  const product = {
    name: 'E-commerce Completo',
    price: 1499.90,
  };

  const pixCode = '00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266554400005204000053039865802BR5913NOME COMPLETO6009SAO PAULO62070503***6304E4A9';
  const boletoNumber = '34191.79001 01043.510047 91020.101013 8 95030000149990';

  
  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='font-sans grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen  pb-20 gap-0 '>
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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-8">     
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
       
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h1 className="text-3xl font-bold mb-6">Pagamento</h1>
          <p className="text-gray-400 mb-8">Escolha como você quer pagar.</p>

    
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setPaymentMethod('pix')}
              className={`p-4 rounded-md text-center font-semibold border-2 transition ${
                paymentMethod === 'pix' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500'
              }`}
            >
              PIX
            </button>
            <button
              onClick={() => setPaymentMethod('boleto')}
              className={`p-4 rounded-md text-center font-semibold border-2 transition ${
                paymentMethod === 'boleto' ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500'
              }`}
            >
              Boleto
            </button>
          </div>

       
          {paymentMethod === 'pix' && (
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Pague com PIX</h2>
              <p className="text-gray-400 mb-4">Escaneie o QR Code ou use o Pix Copia e Cola.</p>
              <div className="flex justify-center mb-4">
                <Image src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=example" alt="QR Code PIX" width={200} height={200} className="rounded-md" />
              </div>
              <button
                onClick={() => handleCopy(pixCode)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition relative"
              >
                {copied ? 'Código Copiado!' : 'Copiar Código PIX'}
              </button>
            </div>
          )}

          {paymentMethod === 'boleto' && (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Pagar com Boleto</h2>
              <p className="text-gray-400 mb-6">O boleto vence em 3 dias úteis. O pagamento pode levar até 2 dias para ser confirmado.</p>
              <div className="bg-gray-900 p-4 rounded-md mb-4 break-words">
                <p className="font-mono text-sm text-gray-300">{boletoNumber}</p>
              </div>
              <div className="flex gap-4">
                <button
                    onClick={() => handleCopy(boletoNumber)}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md transition"
                >
                    {copied ? 'Copiado!' : 'Copiar Código'}
                </button>
                <button 
                    onClick={() => alert('Em um site real, o download do PDF começaria.')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition"
                >
                    Baixar Boleto
                </button>
              </div>
            </div>
          )}
        </div>

       
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 h-fit">
          <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-400">Entrega digital</p>
                </div>
              </div>
              <p className="font-semibold">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
          <div className="border-t border-gray-700 my-6"></div>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
             <div className="flex justify-between">
              <p>Taxas</p>
              <p>R$ 0,00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 my-6"></div>
          <div className="flex justify-between items-center font-bold text-xl">
            <p>Total</p>
            <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
          </div>
          <button 
            onClick={() => alert('Obrigado pela sua compra! (Simulação)')}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 text-white font-bold py-4 px-4 rounded-md text-lg transition"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}