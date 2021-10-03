import React from 'react';
/*Include in index.js*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Card, CardText, Row,Button, Col } from 'reactstrap';
import './style.css';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import TablePage from './table';

const data = [
  { name: 'Correct', value: 50},
  { name: 'Incorrect', value: 20 },
  { name: 'Skipped',value: 30 },
 
];
const COLORS = [ '#18A88C','#FF5656', '#0286FF'];

function App() {
  return (
    <div>
       <div className="nav">
      <Navbar expand="md">
      <i class="fa fa-arrow-circle-left" color="black"></i>
        <NavbarBrand className="head">  Gate CS MOCK TEST Analysis</NavbarBrand>
      </Navbar>
    </div>
    <div className="btns">
    <>
  <Button className="btn">Overview</Button>{' '}
  <Button className="btn" >Solution</Button>{' '}
  <Button className="btn" >Weakness</Button>{' '}
  <Button  className="btn">Comparison</Button>{' '}
  </>
  </div>
    <Row >
      <Col sm="6">
        <Card body className="card1" >
          <ResponsiveContainer width="100%" className="pie1" >
          <PieChart  >
        <Pie 
          data={data}
          cx={140}
          cy={100}
          innerRadius={55}
          outerRadius={85}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
      </ResponsiveContainer >
      <CardText><div className="total">
                  Out of 200
                  </div>
      </CardText>
      <Card className="legends" >
      <Row>
      <Col sm="4" >
      
      <span>
          <div className="name">Correct</div>
          <span className="screen">
          <button className="bt"> Oo</button>
            </span> <span className="per"> 50%</span>
         </span>
      </Col>
      <Col sm="4" >
      
     
      <div className="name">Incorrect</div>
          <div>
          <span>
          <button className="bt" id='bt1'> Oo</button>
            </span> 
            <span className="per"> 25%</span>
          </div>
          
      </Col>
      <Col sm="4">
          <div className="name">Skipped</div>
          <div>
          <span>
          <button className="bt"id='bt2' > Oo</button>
            </span> 
            <span className="per"> 25%</span>
          </div>
          
      </Col>
      </Row>
      </Card>
        </Card>
        
      </Col>
      <Col sm="6" >
        <Card body className="card2" >
          <div className="table1">
          <Row>
          <Col><CardText id='txt'> <span className="t1">Total Time taken</span></CardText></Col><Col><CardText><span className="time1" > 1 hr 31 min</span></CardText></Col>
          </Row>
          <Row>
          <Col><CardText id='txt'> <span className="t1">Total time spent per question(Average)</span></CardText></Col><Col><CardText><span className="time2"> 2.5 min</span></CardText></Col>
          </Row>
          <Row>
          <Col><CardText id='txt'> <span className="t1">Total time spent per question(Advised)</span></CardText></Col><Col><CardText><span className="time3" > 2 min</span></CardText></Col>
          </Row>
          </div>
        </Card>
      </Col>
      <Col sm="6" >
        <Card body className="card1" >
          <TablePage/>
        </Card>
      </Col>
      <Col sm="6" >
        <Card body className="card2" >
          <div className="table2">
         <CardText className="heading">8 incorrect answers </CardText>
          <Row>
          <Col><CardText id='txt'> <span className="t1">You did not attempt most questions</span></CardText></Col><Col><CardText><span className="time2" > Topic 1 </span></CardText></Col>
          </Row>
          <Row>
          <Col><CardText id='txt'> <span className="t1">You attempted most questions incorrect from</span></CardText></Col><Col><CardText><span className="time2"> Topic 1</span></CardText></Col>
          </Row>
          <Row>
          <Col><CardText id='txt'> <span className="t1">Additional topics you need to work on</span></CardText></Col><Col><CardText><span className="time2" > Topic 1</span></CardText></Col>
          </Row>
          </div>
        </Card>
      </Col>
     
    </Row>
    </div>
  );
}

export default App;
