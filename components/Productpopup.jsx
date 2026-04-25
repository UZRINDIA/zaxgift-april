import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image'; // if you're using Next.js

export default function ZoomImage({ src }) {
  return (
    <Zoom>
      <Image
        src={src}
        alt="Zoomable"
        width={800}
        height={600}
        className="object-cover w-full h-auto"
      />
    </Zoom>
  );
}
