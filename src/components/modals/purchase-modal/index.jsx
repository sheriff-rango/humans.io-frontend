import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";
import { useAppSelector } from "@app/hooks";

const PurchaseModal = ({
    show,
    handleModal,
    generalOptions,
    amountOptions,
    handleClickConfirm,
}) => {
    const [amount, setAmount] = useState();
    const [isPendingTx, setIsPendingTx] = useState(false);
    const balance = useAppSelector((state) => state.balance);

    const handleChangeAmount = (e) => {
        if (amountOptions?.disabled) return;
        const { value } = e.target;
        setAmount(value);
    };
    const handleConfirm = async () => {
        if (handleClickConfirm) {
            setIsPendingTx(true);
            handleClickConfirm(
                amountOptions?.disabled ? amountOptions?.defaultAmount : amount,
                () => {
                    setIsPendingTx(false);
                }
            );
        }
    };

    return (
        <Modal
            className="rn-popup-modal placebid-modal-wrapper"
            show={show}
            onHide={handleModal}
            centered
        >
            {show && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleModal}
                >
                    <i className="feather-x" />
                </button>
            )}
            <Modal.Header>
                <h3 className="modal-title">{generalOptions.title}</h3>
            </Modal.Header>
            <Modal.Body>
                {generalOptions.description && (
                    <p>{generalOptions.description}</p>
                )}
                <div className="placebid-form-box">
                    {generalOptions.amountDescription && (
                        <h5 className="title">
                            {generalOptions.amountDescription}
                        </h5>
                    )}
                    <div className="bid-content">
                        <div className="bid-content-top">
                            <div className="bid-content-left">
                                <input
                                    type="text"
                                    defaultValue={amountOptions?.defaultAmount}
                                    disabled={amountOptions?.disabled}
                                    onChange={handleChangeAmount}
                                />
                                <span>{amountOptions?.denom || "wETH"}</span>
                            </div>
                        </div>

                        <div className="bid-content-mid">
                            <div className="bid-content-left">
                                <span>Your Balance</span>
                                <span>Service fee</span>
                                <span>Total bid amount</span>
                            </div>
                            <div className="bid-content-right">
                                <span>
                                    {`${balance.amount || ""} ${
                                        balance.denom || ""
                                    }`}
                                </span>
                                <span>10 uheart</span>
                                <span />
                            </div>
                        </div>
                    </div>
                    <div className="bit-continue-button">
                        <Button
                            size="medium"
                            fullwidth
                            onClick={handleConfirm}
                            disabled={isPendingTx}
                        >
                            {generalOptions.buttonString}
                        </Button>
                        <Button
                            color="primary-alta"
                            size="medium"
                            className="mt--10"
                            onClick={handleModal}
                            disabled={isPendingTx}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

PurchaseModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    generalOptions: PropTypes.shape({
        title: PropTypes.string.isRequired,
        buttonString: PropTypes.string.isRequired,
        description: PropTypes.string,
        amountDescription: PropTypes.string,
    }).isRequired,
    amountOptions: PropTypes.shape({
        defaultAmount: PropTypes.number,
        minAmount: PropTypes.number,
        denom: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    }),
    handleClickConfirm: PropTypes.func,
};
export default PurchaseModal;
