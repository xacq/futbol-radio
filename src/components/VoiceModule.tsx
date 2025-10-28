import { useEffect } from 'react';

const VoiceModule = () => {
  useEffect(() => {
    // Reinicializar el widget de Knotie después de que el componente se monte
    const knotieWidget = (window as any).KnotieWidget;
    if (knotieWidget) {
      knotieWidget.init();
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="relative rounded-2xl p-6" style={{
        background: 'hsl(var(--voice-module-bg))',
        boxShadow: 'var(--shadow-elegant)'
      }}>
        <div id="knotie-widget" data-token="wgt_237a640e5eafbb11408e124bee5a4f4b9caf00913c0d7f2ba84a0bbac01e1a20"></div>
      </div>
    </div>
  );
};

export default VoiceModule;