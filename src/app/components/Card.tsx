import Image from 'next/image';

type CardProps = {
  title: string,
  content: string,
  image?: string,
  width?: number,
  height?: number,
}

export const Card = ({ title, content, image, width, height }: CardProps) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold pb-2">{title}</h3>
    {image && (
      <div className="flex justify-center items-center">
        <Image className="dark pb-2" src={image} alt='logo' width={width} height={height} priority />
      </div>
    )}
    <p>{content}</p>
  </div>
);
