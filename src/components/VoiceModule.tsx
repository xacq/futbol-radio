// src/components/VoiceModule.tsx
import React from 'react';
import VoiceAgentButton from './VoiceAgentButton'; // 👈 Importa el componente que conecta a LiveKit

const VoiceModule = () => {
  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div
        className="relative rounded-2xl p-6 flex flex-col items-center justify-center gap-6"
        style={{
          background: 'hsl(var(--voice-module-bg))',
          boxShadow: 'var(--shadow-elegant)',
        }}
      >
        {/* Texto introductorio */}
        <p className="text-lg md:text-xl font-semibold text-center text-white leading-snug">
          Habla con <span className="text-yellow-400">Andrés Cántor</span> 🎙️
        </p>

        {/* Botón de voz */}
        <VoiceAgentButton />
      </div>
    </div>
  );
};

export default VoiceModule;
