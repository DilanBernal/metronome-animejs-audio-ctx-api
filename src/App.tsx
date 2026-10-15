
import { useEffect, useRef, useState } from 'react';
import './App.css'
import { animate, createScope } from 'animejs';
import { AnimatedIndicator } from './components/animated-indicator';
import { useBpmStore } from './stores/bpm-store';

type audioStates = 'suspended' | 'running' | 'closed';

function App() {

  // const audioCtx = useRef(new (window.AudioContext)());
  // const animRoot = useRef(null);
  // const animScope = useRef(null);
  // const [volume, setVolume] = useState(0.1);
  const bpmStore = useBpmStore();

  // useEffect(() => {
  //   animScope.current = createScope({ root: animRoot }).add(self => {
  //     self.add('animacion', (i: number) => {
  //       console.log(i)
  //       animate('p', {
  //         rotate: i * 360,
  //         translateX: { to: 100 * i },
  //         duration: 1500,
  //         onComplete: self => {
  //           console.log(self);
  //           self.reverse();
  //         }
  //       })
  //     })

  //   });
  //   return () => animScope.current.revert()
  // }, []);

  // const oscilador = audioCtx.current.createOscillator();
  // const gainNode = audioCtx.current.createGain();

  // const [audioCtxState, setAudioCtxState] = useState<audioStates>("suspended");
  // useEffect(() => {
  //   oscilador.type = 'sawtooth';
  //   oscilador.frequency.setValueAtTime(440, audioCtx.current.currentTime);

  //   // Reducir un poco el volumen (0.1 es el 10%)
  //   gainNode.gain.setValueAtTime(volume, audioCtx.current.currentTime);

  //   // Conectar los nodos a la salida
  //   oscilador.connect(gainNode);
  //   gainNode.connect(audioCtx.current.destination);
  // }, []);

  // function playSound() {
  //   if (audioCtxState === 'suspended') {
  //     animScope.current.methods.animacion(gainNode.gain.value);
  //     audioCtx.current.resume();
  //     setAudioCtxState('running');
  //   }
  //   oscilador.start(audioCtx.current.currentTime);
  // }

  // function stopSound() {
  //   if (audioCtxState === 'running') {
  //     audioCtx.current.suspend();
  //     setAudioCtxState('suspended');
  //     return;
  //   }
  //   oscilador.stop(audioCtx.current.currentTime);
  // }

  // useEffect(() => {

  //   gainNode.gain.setValueAtTime(volume, audioCtx.current.currentTime);

  //   oscilador.connect(gainNode);
  //   gainNode.connect(audioCtx.current.destination);
  //   animScope.current.methods.animacion(volume);
  // }, [volume]);

  return (
    <>
      <main className='bg-zinc-950 w-screen min-h-screen '>
        <form>
          <label htmlFor="bpm"></label>
          <input type="range" defaultValue={0} name="bpm" id="bpm" onChange={(e) => bpmStore.setBpm(Number(e.target.value))} />
        </form>
        <AnimatedIndicator />
      </main >
    </>
  )
}

export default App
