import React, { Component } from "react";
import { Col, Row, Card, Select } from "antd";
import "../styling/style.scss";

const { Option } = Select;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { option: "" };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="form-container">
        <Row>
          <h2 className="form-title">REACT TABUNGAN APP (CRUD)</h2>
        </Row>
        <Row gutter={[48, 16]}>
          <Col span={12}>
            <div className="form-option">
              <p>Tipe:</p>
              <Select
                placeholder="Pilih"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Option name="option" value="Pemasukan">
                  Pemasukan
                </Option>
                <Option name="option" value="Pengeluaran">
                  Pengeluaran
                </Option>
              </Select>
            </div>
          </Col>
          <Col span={12}>
            <Card className="form-total">
              <p>Total Pemasukan:</p>
              <p>IDR 30000</p>
              <p>Total Pengeluaran:</p>
              <p>IDR 10000</p>
              <p>Total Uang:</p>
              <p>IDR 20000</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form;
