import Container from "../../../components/ui/container/Container";
import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpeg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpeg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpeg";
import gallery7 from "../../../assets/images/gallery/gallery7.jpeg";
import gallery8 from "../../../assets/images/gallery/gallery8.jpg";

const Gallery = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center mt-14 mb-2 uppercase ">
        Image Gellery
      </h1>
      <hr className="text-center w-32 border-red-100 border-4  flex justify-center mx-auto" />
      <div className=" container mx-auto p-4 ">
        <div className="grid grid-cols-3  gap-2 overflow-hidden ">
          <div className=" col-span-2 row-span-2 h-[300px]  ">
            <img src={gallery1} alt="Image 1" className=" w-full h-full   " />
          </div>
          <div className="h-[150px] ">
            <img src={gallery2} alt="Image 2" className=" w-full h-full  " />
          </div>
          <div className="h-[140px] ">
            <img src={gallery3} alt="Image 3" className=" w-full h-full  " />
          </div>
          <div className=" h-[220px]">
            <img src={gallery4} alt="Image 4" className=" w-full h-full  " />
          </div>
          <div className="col-span-2 h-[220px] ">
            <img src={gallery5} alt="Image 5" className=" w-full h-full  " />
          </div>
          <div className="h-[200px] ">
            <img src={gallery6} alt="Image 6" className=" w-full h-full  " />
          </div>
          <div className=" h-[200px] ">
            <img src={gallery7} alt="Image 7" className=" w-full h-full  " />
          </div>
          <div className=" h-[200px] ">
            <img src={gallery8} alt="Image 8" className=" w-full h-full  " />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
