import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="h-10 sm:h-14">
      <Image
        height={200}
        width={200}
        src="/logo.svg"
        alt="Stellar logo"
        className="h-full w-full object-contain"
      />
</div>
  );
};

export default Logo;
