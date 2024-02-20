import Image from "react-bootstrap/Image"
import DtuLogo from "../src/assets/dtu_logo.png"
export const AddSubjectHeader = () => {
    return (
        <div className="text-center">
            <Image src={DtuLogo} alt="College Logo" />
        </div>
    );
};