import { Image } from 'react-bootstrap'

export default function GroupBar() {
    return (
        <div className="d-flex justify-content-center">
            <Image className="group-icon" src="/icons/black.png" />
            <div className="align-content-end">
                <span>組さん:</span>
            </div>
        </div>
    )
}
