import { useState } from "react";
import { cn } from "@/lib/utils";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  extension?: string;
}

interface FileItemProps {
  node: FileNode;
  depth: number;
  isLast: boolean;
}

const getFileIcon = (extension?: string) => {
  const iconMap: Record<string, { color: string; icon: string }> = {
    py: { color: "text-[#c9b08c]", icon: "⚙" },
    ts: { color: "text-[#b89a72]", icon: "◆" },
    tsx: { color: "text-[#d4b896]", icon: "⚛" },
    js: { color: "text-[#c4a45f]", icon: "◆" },
    css: { color: "text-[#a08060]", icon: "◈" },
    json: { color: "text-[#c9b08c]", icon: "{}" },
    md: { color: "text-[rgba(201,176,140,0.5)]", icon: "◊" },
    ipynb: { color: "text-[#d4956a]", icon: "◉" },
    default: { color: "text-[rgba(201,176,140,0.4)]", icon: "◇" },
  };
  return iconMap[extension || "default"] || iconMap.default;
};

function FileItem({ node, depth, isLast }: FileItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;
  const fileIcon = getFileIcon(node.extension);

  return (
    <div className="select-none">
      <div
        className={cn(
          "group relative flex items-center gap-2 py-1 px-2 rounded-sm cursor-pointer transition-all duration-150",
        )}
        style={{
          paddingLeft: `${depth * 16 + 8}px`,
          background: isHovered ? "rgba(201,176,140,0.06)" : "transparent",
        }}
        onClick={() => isFolder && setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {depth > 0 && (
          <div className="absolute top-0 bottom-0" style={{ left: `${(depth - 1) * 16 + 16}px`, width: "1px", background: isHovered ? "rgba(201,176,140,0.3)" : "rgba(201,176,140,0.1)" }} />
        )}
        <div className={cn("flex items-center justify-center w-4 h-4 transition-transform duration-150", isFolder && isOpen && "rotate-90")}>
          {isFolder ? (
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
              <path d="M1 1L5 4L1 7" stroke={isHovered ? "#c9b08c" : "rgba(201,176,140,0.4)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <span className={cn("text-xs", fileIcon.color)}>{fileIcon.icon}</span>
          )}
        </div>
        <div className={cn("flex items-center justify-center w-5 h-5 rounded transition-all duration-150", isFolder ? "text-[#c9b08c]" : fileIcon.color)} style={{ opacity: isHovered ? 1 : 0.7 }}>
          {isFolder ? (
            <svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
              <path d="M1.5 1C0.671573 1 0 1.67157 0 2.5V11.5C0 12.3284 0.671573 13 1.5 13H14.5C15.3284 13 16 12.3284 16 11.5V4.5C16 3.67157 15.3284 3 14.5 3H8L6.5 1H1.5Z" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" opacity="0.8">
              <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5V14.5C0 15.3284 0.671573 16 1.5 16H12.5C13.3284 16 14 15.3284 14 14.5V4.5L9.5 0H1.5Z" />
              <path d="M9 0V4.5H14" fill="currentColor" fillOpacity="0.5" />
            </svg>
          )}
        </div>
        <span className="font-mono text-sm transition-colors duration-150" style={{ color: isFolder ? (isHovered ? "#ede0cc" : "rgba(237,224,204,0.85)") : (isHovered ? "#ede0cc" : "rgba(237,224,204,0.55)") }}>
          {node.name}
        </span>
        {!isFolder && (
          <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[#c9b08c] transition-all duration-150" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "scale(1)" : "scale(0)" }} />
        )}
      </div>
      {hasChildren && (
        <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? `${node.children!.length * 100}px` : "0px", opacity: isOpen ? 1 : 0 }}>
          {node.children!.map((child, index) => (
            <FileItem key={child.name} node={child} depth={depth + 1} isLast={index === node.children!.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ data, className }: { data: FileNode[]; className?: string }) {
  return (
    <div className={cn("rounded-sm border border-[rgba(201,176,140,0.15)] p-3 font-mono", className)} style={{ background: "rgba(10,9,7,0.85)" }}>
      <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[rgba(201,176,140,0.1)]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8a4040]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#8a7040]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#4a7040]" />
        </div>
        <span className="text-xs text-[rgba(201,176,140,0.4)] ml-2">explorer</span>
      </div>
      <div className="space-y-0.5">
        {data.map((node, index) => (
          <FileItem key={node.name} node={node} depth={0} isLast={index === data.length - 1} />
        ))}
      </div>
    </div>
  );
}
