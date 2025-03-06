import { ChangeEvent, useRef } from "react";

const FileInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.files?.length) {
    }
  };
  return (
    <div
      onClick={() => {
        fileInputRef.current?.click();
      }}
      className="w-24 h-24 text-center rounded-full grid cursor-pointer text-xs px-5 py-2 relative border border-dashed rounded transition-[border-color]"
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <span className="text-blue-900 text-xs pt-3">Click to upload an image</span>
    </div>
  );
};

export default FileInput;
