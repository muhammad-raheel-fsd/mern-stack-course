import SectionOutlet from "../../common/SectionOutlet/Index";

const Homepage = () => {
  return (
    // <div className="bg-green-300 min-h-screen min-w-full">
    //   <h2 className="text-4xl font-bold text-center py-10 text-purple-800 text-[orange]">
    //     Homepage
    //   </h2>

    //   <p className="text-center text-2xl text-purple-800 my-12">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
    //     veniam!
    //   </p>
    //   <div className="bg-orange-700 flex justify-center items-center h-20 w-1/2 mx-auto">
    //     <div className="grow-[1]">Box1</div>
    //     <div className="grow-[2]">Box2</div>
    //     <div className="grow-[3]">Box3</div>
    //   </div>
    // </div>

    <>
      <SectionOutlet title="Homepage" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        accusantium dicta atque quaerat facere corrupti delectus, sed quibusdam
        necessitatibus consequatur.
      </SectionOutlet>
    </>
  );
};

export default Homepage;
