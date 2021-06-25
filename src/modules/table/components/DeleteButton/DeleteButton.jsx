import React, {useState} from "react";
import {Button, Modal, Text} from "../../../../lib";
import bin from '../../../../resources/icons/bin.svg';

export const DeleteButton = () => {
    const [isModal, setModal] = useState(false);
    return (
        <>
            <Button className="red small"
                    icon={bin}
                    text="Удалить"
                    onClick={setModal.bind(this, true)}/>
            <Modal
                visible={isModal}
                header={<Text text="Удалить n записей?"/>}
                content={
                    <>
                        <Button className="link"
                            text="Удалить"
                            onClick={setModal.bind(this, false)}
                        />
                        <Button className="blue"
                            text="Отмена"
                            onClick={setModal.bind(this, false)}
                        />
                    </>
                }
                positionAround={this}
                onClose={setModal.bind(this, false)}
            />
        </>
    )
}