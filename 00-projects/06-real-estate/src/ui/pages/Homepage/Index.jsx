import SectionOutlet from "../../common/SectionOutlet/Index";
import NavigationMenu from "../../common/NavigationMenu/Index";

const Homepage = () => {
  return (
    <SectionOutlet childClassName="max-w-[1100px] bg-green-400">
      <NavigationMenu />
    </SectionOutlet>
  );
};

export default Homepage;

// Button here
// const [isClicked, setIsClicked] = useState(false);

{
  /* <button
      className={
        isClicked ? "text-green-600 bg-green-300" : "text-red-600 bg-red-300"
      }
      className={`text-green 500 py-2 px-4 border ${
        isClicked ? "text-green-500 bg-green-300" : "text-red-500 bg-red-300"
      }`}
      className={CN(
        "border-2 text-black border-black px-4 py-2 rounded",
        "m-10",
        "shadow-sm",
        "hover:shadow-md",
        "transition-all",
        "duration-300",
        {
          "text-green-500 bg-green-300": isClicked,
          "text-red-500 bg-red-300": !isClicked,
        }
      )}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ? "Clicked..." : "Click here"}
    </button> */
}

// <>
//   {/* <div className="bg-green-300 min-h-screen min-w-full">
//     //{" "}
//     <h2 className="text-4xl font-bold text-center py-10 text-purple-800 text-[orange]">
//       // Homepage //{" "}
//     </h2>
//     //{" "}
//     <p className="text-center text-2xl text-purple-800 my-12">
//       // Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//       Recusandae, // veniam! //{" "}
//     </p>
//     //{" "}
//     <div className="bg-orange-700 flex justify-center items-center h-20 w-1/2 mx-auto">
//       // <div className="grow-[1]">Box1</div>
//       // <div className="grow-[2]">Box2</div>
//       // <div className="grow-[3]">Box3</div>
//       //{" "}
//     </div>
//     //{" "}
//   </div> */}
//   {/* <p className="text-4xl font-bold text-center py-10 text-purple-800  text-green-800 text-[orange]">
//     Homepage
//   </p> */}
//   {/* <SectionOutlet title="Homepage" >
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
//     accusantium dicta atque quaerat facere corrupti delectus, sed quibusdam
//     necessitatibus consequatur.
//   </SectionOutlet> */}
//   {/* <h1>Heading 6</h1>
//   <h2>Heading 6</h2>
//   <h3>Heading 6</h3>
//   <h4>Heading 6</h4>
//   <h5>Heading 6</h5>
//   <h6>Heading 6</h6>
//   <p>Paragraph</p> */}
// </>
