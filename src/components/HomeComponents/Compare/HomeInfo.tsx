import React from "react";

export default function HomeInfo({
  title,
  paragraph,
  paragraph2,
}: {
  title: string;
  paragraph: string;
  paragraph2: string;
}) {
  return (
    <div className="py-3 flex justify-between">
      <h1 className="font-bold">{title}</h1>
      <p className="flex items-center text-center">{paragraph}</p>
      <p>{paragraph2}</p>
    </div>
  );
}
