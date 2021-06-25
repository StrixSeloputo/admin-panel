import React, {useState} from "react";
import {Button, Modal} from "../../../../lib";
import pencil from '../../../../resources/icons/pencil.svg';
import {statuses} from "../../../../store/status";
import {Status} from "../../../status/components";

export const ChangeStatusButton = () => {
    const [isModal, setModal] = useState(false);
    return (
        <>
            <Button className="blue small"
                    icon={pencil}
                    text="Изменить статус"
                    onClick={setModal.bind(this, true)}/>
            <Modal
                visible={isModal}
                content={
                    <>
                        {statuses.map(status => <Status statusId={status.id}
                                                        key={status.id}
                                                        onClick={setModal.bind(this, false)} />)}
                    </>
                }
                positionAround={this}
                onClose={setModal.bind(this, false)}
            />
        </>
    )
}