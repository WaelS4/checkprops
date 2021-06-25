import React from 'react'
import { Col, Image } from 'react-bootstrap'
const Photo = ({ children }) => {
    return (
        <div>
            <Col xs={6} md={4}>
                <Image src={children} roundedCircle style={{ width: 250 }} />
            </Col>
        </div>
    )
}

export default Photo

Photo.defaultProps = {
    children: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
}