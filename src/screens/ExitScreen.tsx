import GroupIdentifierBar from '@/components/GroupIdentifierBar'
import { Button, Container, Row } from 'react-bootstrap'
import './exit_screen.css'

export default function ExitScreen() {
    return (
        <Container>
            <Row className="my-4">
                <GroupIdentifierBar />
            </Row>
            <Row className="my-4">
                <p className="text-center">
                    <span className="thank-you">
                        ご見学ありがとうございました！
                    </span>
                </p>
                <p className="text-center">
                    またのご来場をお待ちしております🐈
                </p>
            </Row>
            <Row className="my-4">
                <p className="text-center">
                    このままこの画面を閉じてください。
                </p>
            </Row>
        </Container>
    )
}
