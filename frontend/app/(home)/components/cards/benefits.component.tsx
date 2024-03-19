import Image from "next/image";

interface BenefitsProps {
  img: string;
  title: string;
  description: string;
}

export function Benefits({ description, img, title }: BenefitsProps) {
  return (
    <div className="flex flex-col bg-background-500 h-full rounded-3xl gap-8 px-5 pb-10">
      <div className="flex justify-center items-center">
        <Image src={img} width={300} height={300} alt={title} />
      </div>
      <h2 className="w-full text-zinc-100 text-3xl font-semibold">{title}</h2>
      <p className="flex-grow text-zinc-400 text-xl">{description}</p>
    </div>
  );
}
