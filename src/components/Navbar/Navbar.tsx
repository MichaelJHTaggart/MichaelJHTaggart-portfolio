import { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex shadow-md justify-around items-center">
      <img
        src="/logo192.png"
        className="shrink w-14 h-14 rounded-full transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
        alt="b1ueh4wk logo"
      />
      <h1 className="font-[Cinzel] font-bold text-6xl">MJHT</h1>
      {!isOpen ? (
        <span className="animate-turn-0">
          <MenuOutlined
            className="transition ease-in-out delay-150 hover:-translate-y+1 hover:scale-110 duration-300"
            onClick={() => setIsOpen(true)}
            style={{ fontSize: '44px' }}
          />
        </span>
      ) : (
        <span className="animate-turn-90">
          <CloseOutlined
            className="transition ease-in-out delay-150 hover:-translate-y+1 hover:scale-110 duration-300"
            onClick={() => setIsOpen(false)}
            style={{ fontSize: '44px' }}
          />
        </span>
      )}
    </div>
  );
};
