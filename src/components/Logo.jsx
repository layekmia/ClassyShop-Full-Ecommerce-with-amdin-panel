import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.jpg" alt="classy_shop_logo" width={200} height={40} />
    </Link>
  );
}
