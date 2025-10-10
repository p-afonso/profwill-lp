import { ArrowRight, Lightbulb, ClipboardCheck } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { useVideos } from '../hooks/useVideos';

export default function Hero() {
  const { videos, loading } = useVideos('hero');
  const heroVideo = videos[0];

  return (
    <section className="relative bg-coffee-dark pt-24 pb-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white transform origin-bottom-left -skew-y-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aumente sua nota de Redação do <span className="text-coffee-accent">ENEM</span> em tempo recorde com um método{' '}
              <span className="text-coffee-accent">direto ao ponto</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Mesmo que você esteja travando na hora de escrever ou achando que é tarde demais,
              a redação não deve ser o motivo de você perder sua vaga dos sonhos.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#C67A30] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a96326] transition-colors shadow-lg"
            >
              Garanta sua vaga agora!
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="relative">
            {loading ? (
              <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#C67A30] border-t-transparent"></div>
                </div>
              </div>
            ) : heroVideo ? (
              <VideoPlayer
                videoId={heroVideo.video_id}
                title={heroVideo.title}
                aspectRatio="9/16"
                className="shadow-2xl"
              />
            ) : (
              <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <p className="text-white text-center">Vídeo não disponível</p>
                </div>
              </div>
            )}

            <div className="absolute -top-4 -right-4 bg-[#C67A30] text-white p-4 rounded-xl shadow-lg">
              <ClipboardCheck className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#C67A30] text-white p-4 rounded-xl shadow-lg">
              <Lightbulb className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
