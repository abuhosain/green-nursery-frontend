import React, { useState } from 'react';
import { Modal } from 'antd';
import Container from '../../../components/ui/container/Container';

import gallery1 from '../../../assets/images/gallery/gallery1.jpg';
import gallery2 from '../../../assets/images/gallery/gallery2.jpg';
import gallery3 from '../../../assets/images/gallery/gallery3.jpeg';
import gallery4 from '../../../assets/images/gallery/gallery4.jpg';
import gallery5 from '../../../assets/images/gallery/gallery5.jpeg';
import gallery6 from '../../../assets/images/gallery/gallery6.jpeg';
import gallery7 from '../../../assets/images/gallery/gallery7.jpeg';
import gallery8 from '../../../assets/images/gallery/gallery8.jpg';

const images = [
  { src: gallery1, width: 'col-span-2 row-span-2', height: 'h-[300px]' },
  { src: gallery2, width: 'col-span-1 row-span-1', height: 'h-[150px]' },
  { src: gallery3, width: 'col-span-1 row-span-1', height: 'h-[140px]' },
  { src: gallery4, width: 'col-span-1 row-span-1', height: 'h-[220px]' },
  { src: gallery5, width: 'col-span-2 row-span-1', height: 'h-[220px]' },
  { src: gallery6, width: 'col-span-1 row-span-1', height: 'h-[200px]' },
  { src: gallery7, width: 'col-span-1 row-span-1', height: 'h-[200px]' },
  { src: gallery8, width: 'col-span-1 row-span-1', height: 'h-[200px]' },
];

const Gallery: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  const handleClick = (src: string) => {
    setCurrentImage(src);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentImage('');
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center mt-14 mb-2 uppercase">
        Image Gallery
      </h1>
      <hr className="text-center w-32 border-red-100 border-4 flex justify-center mx-auto" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-2 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer ${image.width} ${image.height}`}
              onClick={() => handleClick(image.src)}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          bodyStyle={{ padding: 0 }}
          className="max-w-full"
        >
          <img
            src={currentImage}
            alt="Lightbox"
            className="w-full h-auto"
          />
        </Modal>
      </div>
    </Container>
  );
};

export default Gallery;
