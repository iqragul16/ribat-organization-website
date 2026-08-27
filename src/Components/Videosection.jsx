import hummrahVideo from "../assets/hummrah-video.mp4";

const VideoSection = () => {
  return (
    <section className="w-full px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <video
          src={hummrahVideo}
          controls
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;