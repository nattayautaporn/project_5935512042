import React, { Component } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'


const About = () => {


    return (

        <>
            <br></br>
            <h1 style={{ 'color': '#338EBB' }} ><b>Manual</b></h1>
            <br></br>
            <center>
                <Card border="light" style={{ width: '50rem' }}>
                    <Card.Header>พื้นที่ศึกษา มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>


    
    
    
            <center>
                <Card border="info" style={{ width: '50rem' }}>
                    <Card.Header>Step 1 </Card.Header>
                    <Card.Body>
                        <Card.Title>คลิกเลือกพื้นที่ที่ผู้ใช้งานต้องในแผนที่</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>

            <br></br>
            <center>
                <Card border="success" style={{ width: '50rem' }}>
                    <Card.Header>Step 2</Card.Header>
                    <Card.Body>
                        <Card.Title>กดปุ่ม PLAY เพื่อเเสดงทิศทางการไหลของน้ำ</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>

            <br></br>
            <center>
                <Card border="warning" style={{ width: '50rem' }}>
                    <Card.Header>Step 3</Card.Header>
                    <Card.Body>
                        <Card.Title>กดปุ่มปรับความเเรงของน้ำโดยความเเรงของน้ำสามารถปรับได้ 3 ระดับ</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>

            <br></br>
            <center>
                <Card border="danger" style={{ width: '50rem' }}>
                    <Card.Header>Step 4</Card.Header>
                    <Card.Body>
                        <Card.Title>หากผู้ใช้งานต้องการเลือกพื้นที่ใหม่สามารถคลิกเลือกพื้นที่ใหม่ในเเผนที่ได้เลย</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>

            <br></br>
            <center>
                <Card border="secondary" style={{ width: '50rem' }}>
                    <Card.Header>Step 5</Card.Header>
                    <Card.Body>
                        <Card.Title>ทำซ้ำ step 2</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>


        </>
    )

}


export default About;