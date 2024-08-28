import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

const ProductShowcase = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-black text-white pb-16">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Revolutionize Your Fitness Journey
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                With AI-Powered Guidance
              </span>
            </h1>
          </>
        }
      >
        <div className="flex space-x-4">
        <Image
              src={`/assets/dashboard.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
        </div>
      </ContainerScroll>
      
      <div className="flex flex-col items-center mt-2">
        <p className="text-xl text-gray-300 mb-4">Join thousands of fitness enthusiasts who are achieving their goals faster!</p>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg animatedButton">
          Start Your Free Trial Today
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;
