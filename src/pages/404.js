import React, { Component } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

class Page404 extends Component {
  render() {
    return (
      <div className="data-404">
        <Layout is404={true}>
          <div className="components-404">
            <div className="title-404">404</div>
            <div className="description-404">
              A página que você está tentando acessar não existe ou estou
              fazendo alguma manutenção!
            </div>
            <Link to="/">
              <div className="back-button-404">Voltar</div>
            </Link>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Page404
