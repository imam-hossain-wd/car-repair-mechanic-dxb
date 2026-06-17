import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { Drawer } from "../Drawer/Drawer";
import { useState } from "react";
import { mobileNavItems } from "./NavMenus";

export const MobileDrawerNav = ({ isOpen, onClose, pathname }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };


  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right">
      <div className="flex flex-col h-full">

        {/* Header with Logo (Left) and Close Button (Right) */}
        <div className="flex items-center justify-between my-3 px-5 py-2">
          {/* Logo on Left */}
          <Logo />
          {/* Close Button on Right */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-primary/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-primary " />
          </button>
        </div>

        {/* Border - Only below header, no border above */}
        <div className="border-t border-gray-200 dark:border-gray-700 mb-4"></div>

        {/* Navigation Items */}
        <div className="flex-1 space-y-1 overflow-y-auto">
          {mobileNavItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                      hover:bg-primary/10
                      ${pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground/80"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMenu === item.name ? "rotate-180" : ""}`} />
                  </button>
                  {expandedMenu === item.name && (
                    <div className="ml-8 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                      {item.dropdown.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={`${item.href}/${sub.slug}`}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg transition-all"
                        >
                            <div className="flex items-center justify-between">
                              <span>{sub.name}</span>
                            </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                    hover:bg-primary/10 hover:translate-x-1
                    ${pathname === item.href
                      ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                      : "text-foreground/80 hover:text-primary"
                    }
                  `}
                >
                  <span>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};