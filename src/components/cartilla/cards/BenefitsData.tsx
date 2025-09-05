import noviolenciaImg from "../../../assets/images/Noviolencia.jpeg";
import lideresImg from "../../../assets/images/lider.jpeg";
import transformaImg from "../../../assets/images/Transforma.jpeg";
import peliculasImg from "../../../assets/images/peliculas.jpeg";
import React from "react";

export interface Benefit {
  title: string;
  imageSrc: string;
  modalContent: React.ReactNode;
}

const benefitsData: Benefit[] = [
  {
    title: "🕊️ ¿Qué es la Noviolencia? ✋",
    imageSrc: noviolenciaImg,
    modalContent: (
      <div>
        <p>
          La Noviolencia nació en la India ancestral 🕌 con el jainismo, a partir de Ahimsa 🕉️: abstenerse de dañar a cualquier ser vivo 🐾 con la mente 🧠, la palabra 🗣️ o la acción ✋.<br /><br />
          Siglos después, Gandhi 🕊️ la llevó al mundo como filosofía y estrategia de cambio social 🌍, enfrentando la agresión con respeto 🤝 y resistencia pacífica ✨.<br /><br />
          💡 Recuerda: se escribe Noviolencia (sin espacio), porque es un principio activo de no dañar 🛑.
        </p>
      </div>
    ),
  },
  {
    title: "✌️ Líderes de la Noviolencia que han dejado huella 👣",
    imageSrc: lideresImg,
    modalContent: (
      <div>
        <p>
          A lo largo de la historia, algunos líderes y pensadores transformaron el mundo con la fuerza de la paz ✌️🌏.<br /><br />
          Desde Buda 🧘‍♂️, quien abandonó los lujos para entender el sufrimiento humano, hasta Gandhi 🕊️, que unió espiritualidad y política en su lucha pacífica por la independencia de India.<br /><br />
          Tolstói ✍️, con su mirada crítica sobre la sociedad; Martin Luther King Jr. 🗣️✊, que desafió la segregación racial con marchas y discursos inolvidables; y Nelson Mandela 🏛️🤝, que convirtió la prisión en un instrumento de reconciliación y cambio.<br /><br />
          Cada uno de ellos nos dejó enseñanzas poderosas y frases que aún inspiran 🌟: sobre la paz ✨, el coraje 💪 y la transformación personal 🔄.<br /><br />
          Su historia es más que biografía: es un llamado a actuar con conciencia 🧠 y valentía ❤️.
        </p>
      </div>
    ),
  },
  {
    title: "🌟 ¡Transforma tu vida y la de otros con la Noviolencia! 🌱",
    imageSrc: transformaImg,
    modalContent: (
      <div>
        <p>
          Convertirte en un entrenador de la Noviolencia es un viaje de aprendizaje 📚✨ y acción 💪. No solo se trata de conocer la filosofía, sino de practicarla cada día: resolver conflictos con calma 🧘‍♂️, comunicarte con empatía 🗣️❤️ y liderar con el ejemplo 👣.<br /><br />
          Participa en programas de formación 🎓, involúcrate en proyectos de paz 🌍🤝 y comparte lo que aprendes con talleres o charlas 🗨️.<br /><br />
          💡 Tip rápido: escucha antes de hablar 👂 y deja que la coherencia entre tus palabras y acciones inspire a otros 🌟.<br /><br />
          ⚡ Tip poderoso: la resiliencia es clave 💪; los desafíos llegarán ⛈️, pero tu compromiso puede cambiar vidas 🌈.
        </p>
      </div>
    )
  },
  {
    title: "🎬 Películas que inspiran a vivir la Noviolencia 🕊️",
    imageSrc: peliculasImg,
    modalContent: (
      <div>
        <p>
          ¿Quieres ver cómo la valentía 💪, la empatía ❤️ y la resistencia pacífica ✋ transforman vidas y sociedades 🌍? Estas películas te muestran historias reales y conmovedoras 🎥:<br /><br />
          🏉 <strong>Invictus:</strong> Nelson Mandela une a Sudáfrica a través del rugby, demostrando que la reconciliación puede vencer al odio 🤝.<br /><br />
          🏨 <strong>Hotel Rwanda:</strong> Un hombre común salva vidas durante el genocidio ruandés, enseñando que el coraje noviolento puede marcar la diferencia ✨.<br /><br />
          ⛓️ <strong>12 años de esclavitud:</strong> La lucha por la libertad y la dignidad de Solomon Northup frente a la opresión extrema ⚖️.<br /><br />
          🏴 <strong>American History X:</strong> Un joven líder enfrenta su pasado y aprende que la transformación personal 🔄 puede romper ciclos de odio 🚫.<br /><br />
          Cada historia es un recordatorio poderoso de que la Noviolencia no es debilidad ❌, sino fuerza 💥 para cambiar el mundo 🌎.
        </p>
      </div>
    )
  }
];

export default benefitsData;
