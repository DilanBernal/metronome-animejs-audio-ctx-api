import { useEffect, useRef } from "react";
import { useBpmStore } from "../stores/bpm-store";
import { animate, createScope, linear } from "animejs";


export function AnimatedIndicator() {

  const bpm = useBpmStore(x => x.bpm);
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    const deg = 50;
    scope.current = createScope({ root }).add(self => {
      animate('#aguja', {
        rotate: { from: -deg, to: deg },
        duration: 1500,
        easing: linear(1),
        loop: true,
        alternate: true,
        // onComplete: self => {
        //   console.log(self);
        //   self.reverse();
        // }
      })
      self.add("mover", (Ibpm: number) => {
        console.log(Ibpm)
        console.log(self)
        animate("p", {
          translateX: Ibpm,
          rotate: Ibpm,
        })
      })
    })
    return () => scope.current.revert()
  }, []);
  useEffect(() => {
    console.log("hola")
    scope.current.methods.mover(bpm);
  }, [bpm]);


  return (
    <>
      <div ref={root} className="m-auto flex flex-col items-center justify-center gap-5">
        <div id="aguja" className="bg-amber-400 w-3 h-40 origin-bottom"></div>
        <p className="text-white">
          {bpm}
        </p>
      </div>
    </>
  );
}


