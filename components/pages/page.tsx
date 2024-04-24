import Image from "next/image";

const ImageCard: React.FC = () => {
  return (
    <div>
      <Image src="/React.png" alt="React" width={782} height={400} />
      <p className="mt-2 text-center text-slate-700">React</p>
    </div>
  )
};

export default ImageCard;