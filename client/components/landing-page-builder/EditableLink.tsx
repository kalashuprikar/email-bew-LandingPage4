import React from "react";

interface EditableLinkProps {
  label: string;
  href: string;
  onUpdate?: (label: string, href: string) => void;
  onDelete?: () => void;
  inline?: boolean;
}

export const EditableLink: React.FC<EditableLinkProps> = ({
  label,
  href,
  inline = true,
}) => {
  return (
    <div className="cursor-pointer hover:opacity-70 transition-opacity">
      {inline ? <span>{label}</span> : <a href={href}>{label}</a>}
    </div>
  );
};
