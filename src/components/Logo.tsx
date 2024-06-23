"use client";

import Image from "next/image";
import Logo from "../../public/solanis.png";

export default function UserItem() {
  return (
    <div className="flex items-center gap-2 p-2 border-b rounded-[16-px]">
      <Image
        src={Logo}
        alt="avatar"
        className="avatar rounded-full min-h-12 min-w-12 h-14 w-14"
      />
      <div>
        <p className="font-bold text-xl text-neutral-600">solanis</p>
      </div>
    </div>
  );
}
