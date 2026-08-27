import campusVideo from "../assets/Ribat-Documentary-2026-2.mp4";

function VideoSection() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <video
          src={campusVideo}
          controls
          playsInline
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

export default VideoSection;