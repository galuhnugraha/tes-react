import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

// visible, onSubmit, onCancel, confirmLoading, initialData, onResultClick, onDelete, users, packages, questions
export const EditContact = (props) => {
    const {
        visible,
        onSubmit,
        onCancel,
        confirmLoading, initialData
    } = props;
    const [form] = Form.useForm();
    useEffect(() => {
        setFieldsValue()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function setFieldsValue() {
        if (initialData.id) {
            form.setFieldsValue({
                firstName: initialData.firstName,
                lastName: initialData.lastName,
                age: initialData.age,
                photo: initialData.photo,
            })
        }
    }

    return <Modal title="Edit Data Contact"
        closable={false}
        visible={visible}
        confirmLoading={confirmLoading}
        footer={[
            <Button key="back" onClick={() => {
                form.setFieldsValue({});
                onCancel();
            }}>
                Cancel
            </Button>,
            <Button key="submit" style={{ backgroundColor: '#132743', color: 'white' }} onClick={(val) => {
                form
                    .validateFields()
                    .then(values => {
                        // setLoading(true)
                        onSubmit(values);
                    })
                    .catch(info => {

                    });
            }}>
                Submit
            </Button>,
        ]}
    >
        <Form
            form={form}
            layout="vertical"
            name="basic"
            initialValues={initialData}
        >
            <Form.Item
                name='id'
                hidden={true}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input your First Name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input your Last Name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please input your Age!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Photo"
                name="photo"
                rules={[{ required: true, message: 'Please input your Photo!' }]}
            >
                <Input />
            </Form.Item>
        </Form>
    </Modal>
}