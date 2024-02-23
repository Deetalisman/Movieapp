import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
function Bookmarklist({ Book, onAdd }) {
  return (
    <div className="ml-32  mt-24 mainbody">
      <h1 className="text-[1.2rem] md:text-[1.5rem]">Bookmarked Movies</h1>
      <div className="flex flex-wrap justify-between mt-4">
        {Book?.map((boo) => (
          <Eachbookmark key={boo.title} boo={boo} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

function Eachbookmark({ boo, onAdd }) {
  return (
    <div className="relative  mb-5 lg:w-[22%] md:w-[30%] w-[48%] mov">
      <Image
        src={boo.thumbnail.regular.small}
        alt={boo.title}
        width="100"
        height="100"
        className="w-[100%] rounded-md movh"
      />
      <div onClick={() => onAdd(boo)}>
        <Image
          src={img8}
          alt="meeeeeeee"
          width="20"
          className="mt-10 cursor-pointer absolute top1 right-2 "
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between w-[8rem]">
          <p className="text-[0.7rem] text-gray-300">{boo.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer ml-1"
          />
          <p className="text-[0.7rem] text-gray-300 ml-2">{boo.category}</p>
          <p className="text-[0.7rem] text-gray-300 ml-2">{boo.rating}</p>
        </div>
        <li className="mt-1 list-none text-[0.9rem]">{boo.title}</li>
      </div>
    </div>
  );
}
export default Bookmarklist;
