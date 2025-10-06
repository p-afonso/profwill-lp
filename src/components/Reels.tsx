import VideoPlayer from './VideoPlayer';
import { useVideos } from '../hooks/useVideos';

export default function Reels() {
  const { videos, loading } = useVideos('reels');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011E5A] mb-4">
            Dicas rápidas de <span className="text-[#F97430]">quem já corrigiu</span> milhares de redações
          </h2>
          <p className="text-lg text-gray-700">
            Assista aos vídeos curtos e descubra segredos que só um ex-corretor oficial pode revelar
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#F97430] border-t-transparent"></div>
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <VideoPlayer
                  videoId={video.video_id}
                  title={video.title}
                  aspectRatio="9/16"
                  showOverlay={false}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-semibold text-sm leading-tight mb-1">{video.title}</p>
                    {video.views && (
                      <p className="text-white text-xs font-bold">{video.views} visualizações</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Vídeos não disponíveis no momento</p>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#F97430] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e86620] transition-colors shadow-lg"
          >
            Quero acesso completo ao método
          </a>
        </div>
      </div>
    </section>
  );
}
