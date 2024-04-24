import Image from "next/image";

interface ImageCardProps {
  src: string;
  name: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, name }) => {
  return (
    <div className="border rounded-md p-2 shadow">
      <Image src={src} alt={name} width={782} height={400} />
      <p className="mt-2 text-center text-slate-700">{name}</p>
    </div>
  )
};

export default ImageCard;