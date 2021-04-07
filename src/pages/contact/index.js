import React, { useState, useEffect } from "react";
import { Table, Card, PageHeader, Breadcrumb, Space, Button, Popconfirm,message } from 'antd';
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getContacts, deleteContact, editContact } from "../../store/actions/contactActions";
import { useHistory } from 'react-router-dom';
import { EditContact } from './editContact';
import { connect } from 'react-redux';

const ContactForm = (props) => {
    // const { contacts } = usersList
    const { id, deleteContact, editContact,getContacts } = props;
    const history = useHistory();
    const content = useSelector(state => state.contacts);
    const [showContactModal, setContactModal] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    // const dispatch = useDispatch()
    useEffect(() => {
        fetchData();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchData() {
        getContacts()
    }

    const handleDelete = (val) => {
        console.log(val);
        deleteContact(val)
        console.log(id);
    };

    function modal(value) {
        setDataEdit(value);
        console.log(value);
        setContactModal(true)
    }

    async function submitDataContact(data) {
        const dataContact = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: parseInt(data.age),
            photo: data.photo
        }
        editContact(data.id, dataContact);
        setContactModal(false);
        message.success('Data Contact Berhasil Diganti')
        fetchData()
    }

    const columns = [
        {
            title: 'Fist Name',
            dataIndex: 'firstName',
            width: 190,
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            width: 190,
            key: 'lastName',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 190,
            key: 'age',
        },

        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            width: 190,
            render: (photo) => {
                // eslint-disable-next-line
                return <img src={photo} style={{ width: 40, height: 40 }} />
            }
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Button onClick={() => {
                            modal(record)
                        }} style={{ backgroundColor: '#132743', color: 'white', borderRadius: 5 }}>
                            <div>
                                <FiEdit style={{ marginRight: 8 }} />
                                <span>Edit</span>
                            </div>
                        </Button>

                        <Button style={{ color: 'black', borderRadius: 5, marginLeft: 10 }} >
                            <Popconfirm
                                title="Are you sure to delete this task?"
                                okText="Yes"
                                cancelText="No"
                                onConfirm={() => {
                                    // handleDelete(record.id)
                                    // console.log(record)
                                    handleDelete(record.id)
                                }}
                            >
                                <div style={{ marginLeft: 8 }}>
                                    <FiTrash style={{ marginTop: 3 }} /> Delete
                                </div>
                            </Popconfirm>
                        </Button>
                    </div>
                </Space>
            ),
        },
    ];

    return <div>
        <Breadcrumb>
            <Breadcrumb.Item>
                {/* Home */}
                <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span style={{ color: "#132743" }}>Data Contact</span>
            </Breadcrumb.Item>
        </Breadcrumb>
        <Card bordered={false} className={"shadow"} bodyStyle={{ padding: 0, marginTop: 18, borderRadius: 10, boxShadow: '0 0 10px  0  rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.35)' }}>
            <PageHeader
                className="App"
                subTitle=""
                title={"Contact"}
                extra={[
                    <Button
                        key="1"
                        onClick={() => {
                            history.push("/app/add-contacts")
                        }}
                    >
                        {/* <FiPlus /> New */}
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <FiPlus style={{ marginTop: 4, marginRight: 10 }} size={16} />
                            <span>New</span>
                        </div>
                    </Button>
                ]}
            />

            <Table dataSource={content.contacts.data} columns={columns} size="small"
                className="App"
                style={{ paddingLeft: '12px' }} />
        </Card>
        {showContactModal && (
            <EditContact
                visible={showContactModal}
                onCancel={() => {
                    // setInitialData({})
                    setContactModal(false);
                }}
                onSubmit={async (data) => {
                    submitDataContact(data)
                }}
                initialData={dataEdit}
            />
        )}
    </div>
}


const mapStateToProps = (state) => {
    console.log(state)
    // return {
    //     dataContact: state.contacts,
    //     id: state.id
    // }
    return state.contacts;
}

const mapDispatchToProps = { deleteContact, editContact ,getContacts }

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);