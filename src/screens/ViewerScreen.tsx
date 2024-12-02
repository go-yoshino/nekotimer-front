import { Button, Container, Image, Row } from "react-bootstrap";
import "./viewer_screen.css"

export default function ViewerScreen () {
  return (
    <Container>
      <Row className="my-4">
        <div className="d-flex justify-content-center">
        <Image className="group-icon" src="/icons/black.png" />
        <div className="align-content-end"><span>組さん:</span></div>
        </div>
      </Row>
      <Row className="my-4">
        <div className="d-flex justify-content-center"><span>ただいま</span></div>
        <div className="d-flex justify-content-center"><span className="group-status">入室中</span></div>
        <div className="d-flex justify-content-center"><span>です</span></div>
      </Row>
      <Row className="my-4">
        <div className="d-flex justify-content-center"><span>残り時間</span></div>
        <div className="d-flex justify-content-center"><span className="timer">9:45</span></div>
      </Row>
      <Row className="my-4">
        <div className="d-grid gap-2">
        <Button>退出</Button>
        </div>
      </Row>
    </Container>
  )
}