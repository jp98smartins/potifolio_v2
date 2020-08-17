import React from "react"
import abt_image from "../assets/images/abt-image.jpg"

const aboutme = () => {
  return (
    <div className="abt-data">
      <div className="abt-header">
        <div className="abt-title">
          <span>I.</span>Sobre Mim
        </div>
        <div className="abt-divider"></div>
      </div>
      <div className="abt-body">
        <div className="abt-img">
          <div className="img-back i-1"></div>
          <div className="img-back i-2"></div>
          <div className="img-overlay">
            <img src={abt_image} alt="Foto de Perfil do João Pedro Martins" />
          </div>
        </div>
        <div className="abt-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste
          pariatur voluptatem modi maiores dolor, molestias iusto nemo hic. Ab
          at debitis consectetur nostrum quos iste, tempora quam provident
          voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi iste pariatur voluptatem modi maiores dolor, molestias iusto
          nemo hic. Ab at debitis consectetur nostrum quos iste, tempora quam
          provident voluptate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi iste pariatur voluptatem modi maiores dolor,
          molestias iusto nemo hic. Ab at debitis consectetur nostrum quos iste,
          tempora quam provident voluptate.
        </div>
      </div>
    </div>
  )
}

export default aboutme
