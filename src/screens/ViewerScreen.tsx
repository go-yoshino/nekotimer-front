import { Button, Container, Image, Row } from 'react-bootstrap'
import './viewer_screen.css'
import GroupIdentifierBar from '@/components/GroupIdentifierBar'
import GroupStatusBar from '@/components/GroupStatusBar'
import CountdownTimer from '@/components/CountdownTimer'

export default function ViewerScreen() {
    return (
        <Container>
            <Row className="my-4">
                <GroupIdentifierBar />
            </Row>
            <Row className="my-4">
                <GroupStatusBar />
            </Row>
            <Row className="my-4">
                <CountdownTimer />
            </Row>
            <Row className="my-4">
                <div className="d-grid gap-2">
                    <Button className="p-4">退出</Button>
                </div>
            </Row>
        </Container>
    )
}
