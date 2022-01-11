import React from 'react';
import { Button } from 'reactstrap';
import { Notes } from './Synthesizer';
import synthesizer from './Synthesizer';

class Content extends React.Component {

  public play = (note: number) => {
    synthesizer.play(note, 0.2);
  };

  public render() {

    return (
      <div>
        {Object.keys(Notes).map(note => {
          return (
            <Button onClick={() => this.play(Notes[note])}>{note}</Button>
          );
        })}
      </div>
    )
  }
}

export default Content;