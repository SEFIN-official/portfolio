import IconCloud from "./ui/icon-cloud";
import { iconCloudSlugs } from "@/data/sefinContent";

const slugs = iconCloudSlugs;

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
