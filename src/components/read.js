import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { getDefaultNormalizer } from '@testing-library/dom';

export default function Read() {
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }
    const getData = () => { 
        axios.get(`https://61b2f272c8d4640017aaf568.mockapi.io/curdTestData`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://61b2f272c8d4640017aaf568.mockapi.io/curdTestData/${id}`)
        .then(() => {
            getData();
        })
    }
    
    const [ APIData, setAPIData ] = useState([]);
    useEffect(() => {
        axios.get(`https://61b2f272c8d4640017aaf568.mockapi.io/curdTestData`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                        {APIData.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                <Table.Row key={index}>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                    
                                    <Table.Cell><Link to='/update'><Button onClick={() => setData(data)}>Update</Button></Link></Table.Cell>
                                    
                                    <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                                </Table.Row>
                                </React.Fragment>
                            )
                        })}
                        
                        
                    
                </Table.Body>
            </Table>
        </div>
    )
}