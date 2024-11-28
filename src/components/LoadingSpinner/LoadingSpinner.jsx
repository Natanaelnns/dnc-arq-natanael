import LoadingSpinnerImg from "../../assets/LoadingSpinnerImg.gif"

export default function LoadingSpinner() {
    return (
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={LoadingSpinnerImg} alt="Loading" height="80px"/>
        </div>
    )
}