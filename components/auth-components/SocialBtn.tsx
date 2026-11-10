import React from "react";
import Image from "next/image";

interface SocialBtnProps {
    src: string;
    alt: string;
    name: string;
}

const SocialBtn = ({src, alt, name}: SocialBtnProps) => {
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => window.alert(`${name} sign-in is not configured yet. Please use email and password.`)}
        className="btn-primary"
        title={`${name} sign-in is unavailable`}
      >
        <Image width={20} height={20}
          src={src}
          alt={alt}
        />
        {name}
      </button>
    </div>
  );
};

export default SocialBtn;