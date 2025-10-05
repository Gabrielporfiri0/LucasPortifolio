// components/SiteCard.tsx
import Image from 'next/image';

// Definimos os tipos de dados que o card espera receber (boa prática com TypeScript)
type SiteCardProps = {
  imagem: string;
  titulo: string;
  descricao: string;
  valor: number;
  categoria: string;
};

// O 'export default' permite que você importe este componente em outros arquivos
export default function SiteCard({ imagem, titulo, descricao, valor, categoria }: SiteCardProps) {
  return (
    // Card container
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
      
      {/* Imagem do Card */}
      <div className="relative h-56 w-full">
        <Image
          src={imagem}
          alt={`Imagem do site ${titulo}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Categoria e Título */}
          <p className="text-sm font-medium text-indigo-400">{categoria}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{titulo}</h3>
          <p className="mt-3 text-base text-gray-400">{descricao}</p>
        </div>

        {/* Preço e Botão */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-2xl font-bold text-white">
            R$ {valor.toFixed(2).replace('.', ',')}
          </p>
          <button className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 text-white transition hover:opacity-90">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}