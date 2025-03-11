import { FC } from "react";
import { ChevronRight, User } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  href: string;
  icon?: JSX.Element;
}

const MenuItem: FC<MenuItemProps> = ({ label, href, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-100"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-primary">
          {icon || <User size={18} />}
        </div>
        <span className="text-black font-bold">{label}</span>
      </div>
      <ChevronRight className="text-gray-400" size={20} />
    </Link>
  );
};

const UserMenu: FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-xl mx-auto  rounded-lg    overflow-hidden">
        <div className="flex flex-col">
          <MenuItem
            label="Complete profile"
            href="/profile"
            icon={<User size={18} />}
          />
          <MenuItem label="Help" href="/help" icon={<User size={18} />} />
          <MenuItem
            label="Sign Out"
            href="/signout"
            icon={<User size={18} />}
          />
          <MenuItem
            label="Opt out of the program"
            href="/opt-out"
            icon={<User size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
