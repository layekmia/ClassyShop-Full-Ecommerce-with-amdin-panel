import { LiaShippingFastSolid } from "react-icons/lia";

export default function FreeShippingCard() {
  return (
    <div className="max-w-5xl mb-7 p-4 border-2 border-primaryClr mx-auto rounded-md flex items-center justify-between">
      <div className="flex items-center gap-4">
        <LiaShippingFastSolid className="text-[50px]" />
        <span className="text-xl uppercase font-semibold text-gray-800">
          Free Shipping
        </span>
      </div>
      <p className="text-sm font-medium text-center">
        Free Delivery Now On Your First Order and over $200
      </p>
      <div className="text-black text-2xl font-bold my-2.5">- Only $200*</div>
    </div>
  );
}
