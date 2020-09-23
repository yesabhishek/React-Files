import React, { Component } from "react";
import "./Dashboard.css";
import { Line, LineChart, XAxis, CartesianGrid, Tooltip } from "recharts";
import { stateData } from "../data/Data";

class Dashboard extends Component {
  render() {
    var date = new Date();
    const c_date =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return (
      <div className="dash-body">
        <section className="latest">
          <h3 align="left" className="date">
            Reports on {c_date}
          </h3>
          <ol className="articles">
            <li className="articles__article">
              <a className="articles__link">
                <div className="articles__content articles__content--lhs">
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>U.P, Uttar Pradesh</p>
                    <time>{c_date}</time>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>{c_date}</time>
                  </div>
                </div>
              </a>
            </li>
            <li className="articles__article">
              <a className="articles__link">
                <div className="articles__content articles__content--lhs">
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
              </a>
            </li>
            <li className="articles__article">
              <a className="articles__link">
                <div className="articles__content articles__content--lhs">
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
              </a>
            </li>
            <li className="articles__article">
              <a className="articles__link">
                <div className="articles__content articles__content--lhs">
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
              </a>
            </li>
            <li className="articles__article">
              <a className="articles__link">
                <div className="articles__content articles__content--lhs">
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">
                    Sweet roll gingerbread sweet roll jelly
                  </h2>
                  <div className="articles__footer">
                    <p>Cakes</p>
                    <time>1 Jan 2020</time>
                  </div>
                </div>
              </a>
            </li>
          </ol>
          <p>.</p>
        </section>

        <section className="history">
          <h1>Graphs</h1>
          <br></br>
          <h5>
            Consectetur dolor cillum culpa et mollit sint adipisicing mollit
            irure minim anim anim. Adipisicing id qui proident eu sit duis
            cupidatat sit aute exercitation tempor consequat eu adipisicing. Non
            amet qui ipsum do sint ullamco ea cupidatat. Incididunt aliquip id
            nulla aliqua proident exercitation consectetur ea sit deserunt. Qui
            magna cupidatat ex fugiat dolore et velit eiusmod veniam dolor.
            Pariatur consequat commodo labore fugiat excepteur exercitation aute
            ullamco amet proident minim proident ex enim.
          </h5>
          <LineChart
            width={400}
            height={400}
            data={stateData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
          </LineChart>
          <p className="graph-desc">
            Elit voluptate labore deserunt elit. Nisi eiusmod non anim duis amet
            do. Ea proident reprehenderit anim labore enim consequat voluptate
            et proident irure esse. In Lorem eiusmod mollit elit. Pariatur
            pariatur reprehenderit officia aute veniam labore qui labore amet ut
            irure excepteur excepteur. Ullamco amet aliquip non occaecat elit
            proident duis voluptate laboris. Veniam cillum fugiat cillum commodo
            quis fugiat aliquip reprehenderit adipisicing. Elit irure
            consectetur ex irure sint occaecat deserunt esse non cillum. Laboris
            ea dolor cupidatat et nulla sit sint nisi et ullamco amet do irure
            est. Culpa elit consequat ad exercitation aliquip adipisicing fugiat
            enim culpa eiusmod Lorem. Cupidatat do quis in Lorem veniam tempor
            incididunt id aute non ad amet. Magna do velit dolor ipsum excepteur
            non aliquip nulla Lorem ipsum velit aute ex. In eiusmod magna sint
            nulla dolor elit. Dolor veniam culpa ullamco Lorem reprehenderit
            pariatur et magna veniam. Proident ut sunt id culpa amet anim cillum
            qui sint ut. Officia non exercitation irure sint incididunt amet
            fugiat sit enim. Fugiat labore qui laboris occaecat mollit magna
            fugiat aliquip. Lorem laborum velit duis magna laboris cupidatat sit
            proident veniam eu aliquip in minim reprehenderit. Reprehenderit ea
            culpa incididunt eiusmod labore est tempor. Enim laborum culpa nulla
            ipsum in voluptate anim ad officia exercitation sit deserunt.
            Ullamco dolore et officia est. Nisi ea irure elit reprehenderit
            eiusmod commodo veniam ullamco officia velit nisi. Proident laborum
            sint est officia reprehenderit aliquip. Enim veniam officia laboris
            exercitation culpa irure nostrud. Reprehenderit aute proident
            laboris ad ipsum. Consequat consectetur culpa anim ut laborum.
          </p>
        </section>
      </div>
    );
  }
}

export default Dashboard;
