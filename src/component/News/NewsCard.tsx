import Image from "next/image";
import Link from "next/link";
import type { NewsTypes } from "src/type/crypto";

export const NewsCard = ({ title, image, description, url }: NewsTypes) => {
  return (
    <Link href={url}>
      <a target="_blank">
        <div className="overflow-hidden m-auto mx-4 mb-6 w-72 rounded-2xl shadow-lg">
          {image ? (
            <Image src={image.thumbnail.contentUrl} alt={title} width={288} height={200} />
          ) : (
            <div className="flex justify-center items-center w-[288px] h-[200px] ">
              <h2 className="text-xl font-normal text-white">Image not found</h2>
            </div>
          )}
          <div className="relative p-4 w-full bg-black-card">
            <p className="mb-2 text-xl font-medium text-white">{title}</p>
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
