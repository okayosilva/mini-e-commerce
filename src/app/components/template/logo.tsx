import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <span className="text-xl leading-4">A Z</span>
        <IconBrandAmazon size={40} stroke={1} className="-my-2" />
      </div>
    </Link>
  );
}
