import Image from 'next/image';
import milkyway from '../public/bg.jpg';

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={milkyway}
      placeholder="blur"
      quality={100}
      fill
      sizes=""
      className="bg"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    />
  );
}
