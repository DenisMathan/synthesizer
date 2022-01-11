import React from 'react';
import { style } from 'typestyle';
import { Container, Col, Row } from 'reactstrap';
import Content from './Content';

/*
  Overview on react strap: https://reactstrap.github.io/
  Components: https://reactstrap.github.io/components/
*/

/* We don't need externally provided Props, so we set the props part to {} */
/* But, we want to type our local state with the IState definition */
class App extends React.Component {

  public render() {

    return (
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xl="auto">
            <Content />
          </Col>
        </Row>
      </Container >
    )
  }
}

const col1 = style({
  backgroundColor: '#eeeeee',
  height: '100%'
});

export default App;
