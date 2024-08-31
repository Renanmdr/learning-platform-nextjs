import Image from "next/image";
import Link from "next/link";
interface ICardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}
export const Card = ({ title, href, description, image }: ICardProps) => {
  return (
    <Link href={href} className="hover:no-underline">
      <article className="flex gap-2 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          src={image}
          alt={title}
          height={0}
          width={1000}
          draggable={false}
          className="aspect-video object-cover rounded-2xl"
        />
        <h4 className="font-extrabold text-lg">🏆 {title}</h4>
        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
};
