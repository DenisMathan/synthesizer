/*
https://pages.mtu.edu/~suits/notefreqs.html
*/

// 1 = loud
const VOLUME = 0.3;

// work around typescript warnings
const wnd = window as any;

export const Notes: {
  [key: string]: number
} = {
  C: 261.63,
  Cs: 277.18,
  D: 293.66,
  Ds: 311.13,
  E: 329.63,
  F: 349.23,
  Fs: 369.99,
  G: 392,
  Gs: 415.30,
  A: 440,
  As: 466.16,
  B: 493.88
}

class Synthesizer {

  private audioCtx: AudioContext = new (wnd['AudioContext'] || wnd['webkitAudioContext'])();
  private gainNode: GainNode;

  constructor() {

    this.gainNode = this.audioCtx.createGain();
    // connect to audio context
    this.gainNode.connect(this.audioCtx.destination);
    // lower volume
    this.gainNode.gain.value = VOLUME;
  }

  public play(note: number, time: number) {

    const oscillator = this.audioCtx.createOscillator();
    oscillator.connect(this.gainNode);

    // default
    oscillator.type = 'sine';
    oscillator.frequency.value = note;
    oscillator.start(this.audioCtx.currentTime + 0);
    oscillator.stop(this.audioCtx.currentTime + time);
  }

}

const synthesizer = new Synthesizer();
export default synthesizer;