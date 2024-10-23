const BannerCard = ({ data }) => {
  const { off, des, img, btn, items, clr } = data;
  //   console.log(data);
  return (
    <div style={{backgroundColor:clr}} className="flex rounded-3xl font-mono   items-center pt-10 pl-16 mt-16 ">
      <div className="w-[52%] text-2xl">
        <h1 className="text-4xl font-bold"><span className=" font-normal">GET </span>{off}</h1>
        <h1 className="text-4xl mb-4 ">{items}</h1>
        <p className=" mb-8">{des}</p>
        <p className="text-xl  ">{btn}</p>
      </div>
      <div className="w-[50%]">
        <img width={"100%"} src={img} alt="" />
      </div>
    </div>
  );
};

export default BannerCard;
