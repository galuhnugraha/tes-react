import React, { useState} from 'react';
import { Form, Input, Card, PageHeader, Breadcrumb, Button } from 'antd';
import { useDispatch } from "react-redux";
import { addContacts } from '../../../store/actions/contactActions';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

const AddContact = (props) => {
    // eslint-disable-next-line
    const [state,setState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: null
    })
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (data) => {
        // event.preventDefault();
        let dataContact = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            photo: data.photo
        }
        console.log(dataContact);
        dispatch(addContacts(dataContact));
        setState({
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            photo: data.photo
        })
        history.push('/app/contacts')
    }

    return <div>
        <Breadcrumb>
            <Breadcrumb.Item>
                {/* Home */}
                <span>Data Contact</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span style={{ color: "#132743" }}>Tambah Contact</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        <Card bordered={false} className={"shadow"} bodyStyle={{ padding: 0, marginTop: 18, borderRadius: 10, boxShadow: '0 0 10px  0  rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.35)' }}>
            <PageHeader
                className="App"
                subTitle=""
                title={"Tambah Contact"}
            />
            <Form
                // {...layout}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                style={{ marginLeft: 23 }}
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '98%' }} />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '98%' }} />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: '98%' }} />
                </Form.Item>
                <Form.Item name="photo">
                    <input type='file'  />
                </Form.Item>
                <Form.Item style={{
                    marginBottom: 25,
                    width: 100
                }}>
                    <Button style={{ backgroundColor: '#132743', color: 'white', borderRadius: 5 }}
                        block
                        htmlType="submit"
                        size={'large'}
                    >
                        Submit
					</Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { addContacts })(AddContact);