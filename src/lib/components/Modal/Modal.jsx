import React, {useEffect} from 'react';
import "./style.css";

export const Modal = (props) => {
    const {visible = false, header = '', content = '', footer, onClose} = props;

    const onKeydown = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    })

    if (!visible) return null;
    // если нам передали кнопку, рядом с которой нужно отрисоваться
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-body'>
                    {!!header && <div className='modal-header'>{header}</div>}
                    <div className='modal-content'>{content}</div>
                </div>
                {!!footer && <div className='modal-footer'>{footer}</div>}
            </div>
        </div>
    )
}