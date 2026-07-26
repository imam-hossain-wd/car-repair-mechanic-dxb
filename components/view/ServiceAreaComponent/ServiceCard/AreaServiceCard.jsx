import Image from "next/image";

export function AreaServiceCard({service}) {
  return (
    <div className="group relative flex flex-col items-center gap-2 p-4 backdrop-blur-sm rounded-xl">
      {/* remove background opacity-0 or all kind of opacity remove */}
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-xl opacity-100"></div>

      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          {service.icon && <Image
            src={service.icon}
            alt={service.name}
            width={28}
            height={28}
            className="h-10 w-10 object-contain"
          />}
        </div>
      </div>

      <span className="relative text-sm font-semibold text-gray-800 transition-colors text-center">
        {service.name}
      </span>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary w-1/2 transition-all duration-300"></div>
    </div>
  );
}



