import React, { Component } from 'react';
import './Dashboard.css';
import { ComposedChart, data, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {stateData} from '../data/Data'

class Dashboard extends Component{
  
  
    render(){
      var date = new Date();
      const c_date = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        return(

        <div className="dash-body">
          <section className="latest">
          <h3 align="left" className="date">Reports on {c_date}</h3>
             <ol className="articles">
              <li className="articles__article" ><a className="articles__link">
                  <div className="articles__content articles__content--lhs">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>U.P, Uttar Pradesh</p>
                      <time>{c_date}</time>
                    </div>
                  </div>
                  <div className="articles__content articles__content--rhs" aria-hidden="true">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>{c_date}</time>
                    </div>
                  </div></a></li>
                  <li className="articles__article" ><a className="articles__link">
                  <div className="articles__content articles__content--lhs">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div>
                  <div className="articles__content articles__content--rhs" aria-hidden="true">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div></a></li>
                  <li className="articles__article" ><a className="articles__link">
                  <div className="articles__content articles__content--lhs">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div>
                  <div className="articles__content articles__content--rhs" aria-hidden="true">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div></a></li>
                  <li className="articles__article" ><a className="articles__link">
                  <div className="articles__content articles__content--lhs">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div>
                  <div className="articles__content articles__content--rhs" aria-hidden="true">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div></a></li>
                  <li className="articles__article" ><a className="articles__link">
                  <div className="articles__content articles__content--lhs">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div>
                  <div className="articles__content articles__content--rhs" aria-hidden="true">
                    <h2 className="articles__title">Sweet roll gingerbread sweet roll jelly</h2>
                    <div className="articles__footer">
                      <p>Cakes</p>
                      <time>1 Jan 2020</time>
                    </div>
                  </div></a></li>
            </ol>
          <p>.</p>
          </section>

          <section className="history">
            <h1>Graphs</h1>
            <br></br>
            <LineChart
            width={400}
            height={400}
            data={stateData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>         
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
          </section> 
        </div>

        )
    }  
}


export default Dashboard;