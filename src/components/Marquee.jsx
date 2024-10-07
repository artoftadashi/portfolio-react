export default function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-[#1e1e1e]">
      <div className="py-8 animate-marquee whitespace-nowrap">
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span> {"</"}Let's Work
          Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span> {"</"}Let's Work
          Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span> {"</"}Let's Work
          Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
      </div>

      <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4 font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white italic">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
        <span className="text-4xl font-innerTight text-white">
          <span className="text-[#87FF65] mx-4">•</span>
          {"</"}Let's Work Together!{">"}
        </span>
      </div>
    </div>
  );
}
