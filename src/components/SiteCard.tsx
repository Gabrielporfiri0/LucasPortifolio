import Image from 'next/image';
import Link from 'next/link';


type SiteCardProps = {
  imagem: string;
  titulo: string;
  descricao: string;
  valor: number;
  categoria: string;
};


export default function SiteCard({ imagem, titulo, descricao, valor, categoria }: SiteCardProps) {
  return (
    // Card container
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
      
      <div className="relative h-56 w-full">
        <Image
          src={imagem}
          alt={`Imagem do site ${titulo}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

     
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-400">{categoria}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{titulo}</h3>
          <p className="mt-3 text-base text-gray-400">{descricao}</p>
        </div>

        
        <div className="mt-6 flex items-center justify-between">
          <p className="text-2xl font-bold text-white">
            R$ {valor.toFixed(2).replace('.', ',')}
          </p>
          <Link href="/pagamento" className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 text-white transition hover:opacity-90">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}