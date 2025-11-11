import React, { useState } from "react";
import { Room, RoomEvent, createLocalTracks } from "livekit-client";

export default function VoiceAgentButton() {
  const [active, setActive] = useState(false);
  const [room, setRoom] = useState(null);

  // función asincrónica que maneja la conexión
  async function connectToAgent() {
    try {
      // 1. Obtener token desde FastAPI
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
      const { token } = await res.json();

      // 2. Crear la sala LiveKit
      const newRoom = new Room({
        adaptiveStream: false,
        dynacast: false,
        autoSubscribe: true, // ✅ fundamental
      });

      // 3. Conectar usando el token
      await newRoom.connect("wss://cantoragent-m43lqvqc.livekit.cloud", token);

      // 4. Crear track de micrófono con cancelación de eco, etc.
      const [micTrack] = await createLocalTracks({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      await newRoom.localParticipant.publishTrack(micTrack);

      // 5. Reproducir cualquier pista de audio remota
      newRoom.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        if (track.kind === "audio") {
          const audioEl = document.createElement("audio");
          audioEl.srcObject = new MediaStream([track.mediaStreamTrack]);
          audioEl.autoplay = true;
          document.body.appendChild(audioEl);
          console.log("✅ Subscribed to", participant.identity);
        }
      });

      newRoom.on(RoomEvent.TrackSubscriptionFailed, (_, __, err) =>
        console.error("❌ TrackSubscriptionFailed", err)
      );

      newRoom.on(RoomEvent.ParticipantConnected, (p) =>
        console.log("👤 Participant connected:", p.identity)
      );
      newRoom.on(RoomEvent.ParticipantDisconnected, (p) =>
        console.log("👋 Participant disconnected:", p.identity)
      );

      setRoom(newRoom);
      setActive(true);
      console.log("✅ Conectado al agente de voz");
    } catch (err) {
      console.error("⚠️ Error al conectar con el agente:", err);
    }
  }

  // función para desconectarse del agente
  function disconnectAgent() {
    if (room) {
      room.disconnect();
      setRoom(null);
      setActive(false);
      console.log("🔌 Desconectado");
    }
  }

  return (
    <button
      onClick={() => (active ? disconnectAgent() : connectToAgent())}
      style={{
        background: active ? "#32cd32" : "#ff4500",
        border: "none",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        fontSize: "2rem",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
      }}
    >
      {active ? "🔊" : "🎙️"}
    </button>
  );
}
