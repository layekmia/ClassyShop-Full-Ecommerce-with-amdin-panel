import Link from "next/link";

export default function AddsBannerCard({ data, index }) {
  const isRight = index >= 2;

  return (
    <div className="h-[210px] rounded-lg overflow-hidden relative group">
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 w-full h-full transform transition-transform duration-500 group-hover:scale-110"
      ></div>

      <div
        className={`relative z-10 w-2/3 p-5 flex flex-col h-full gap-5 
          ${isRight ? "ml-auto text-right items-end" : "text-left items-start"}
        `}
      >
        <h3 className="font-semibold text-lg text-gray-800">{data.title}</h3>

        <span className="text-xl font-semibold text-primaryClr">
          ৳{data.price}
        </span>

        <Link href={data.path} className="underline">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
