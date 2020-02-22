import React from 'react';
import fetch from 'isomorphic-fetch';
// import Layout from "../src/layout";

export default class DataFetchExample extends React.Component {
  static async getInitialProps({ res, req, query }) {
    console.log(
      '%c this is query ====> : ',
      'background: black; color: red; font-size:30px',
      query
    );
    let data = {};

    try {
      // fetch data on the server
      const mockData = await fetch(
        `https://swapi.co/api/people/${Math.ceil(Math.random() * 100)}/`
      );

      // will log on server
      console.log('This is mockData ====> : ', mockData);

      data = await mockData.json();
    } catch (e) {
      console.log('this is e ====> : ', e);
    }

    return {
      data
    };
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    console.log('The data we use to render on server side', data);
    return (
      <div>
        Hello data fetch in next.
        <div>
          <h2>data sample</h2>
          <ul className="sw-data">
            {Object.keys(data).map((prop, i) => (
              <li key={i}>
                <b>{`${prop} :`}</b>
                {`${data[prop]}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
