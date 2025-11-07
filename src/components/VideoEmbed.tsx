import type { VideoEmbedProps } from "../services/types";

export default function VideoEmbed({ src, title = "Video" }: VideoEmbedProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-video bg-gray-900">
      <iframe
        src={src}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div>
  );
}