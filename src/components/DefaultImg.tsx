export interface imageProps {
  image: string;
}

export function DefaultImg({ image }: imageProps) {
  return (
    <img
      className="h-full w-full object-cover object-center"
      src={image}
      alt="nature image"
    />
  );
}
