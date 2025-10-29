import Image from "next/image";

type GameBoxProps = {
  name: string;
  image: string;
  description: string;
  svg: string;
  capacity: number;
};

export default function GameBox({
  name,
  image,
  description,
  svg,
  capacity,
}: GameBoxProps) {
  return (
    <div className="bg-primary w-96 overflow-hidden rounded-xl transition-all duration-300 hover:h-fit hover:w-[425px]">
      <div className="text-foreground relative mx-auto flex w-96 flex-col justify-between gap-y-4">
        <Image
          src={svg}
          alt={name}
          width={100}
          height={100}
          className="absolute top-0 -right-5 z-10"
        />
        <div className="font-inter px-3 pt-3">
          <p className="text-sm">{capacity}-a-side</p>
          <h3 className="font-dm-sans text-3xl font-semibold">{name}</h3>
        </div>
        <p className="max-w-xs px-3 font-medium">{description}</p>
        <div className="relative h-80 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>{" "}
      </div>
    </div>
  );
}
