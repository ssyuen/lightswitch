import {Divider, Layout, Typography} from "antd";
import {Navbar} from "./Navbar";
import {Content, Footer} from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import {BulbOutlined} from "@ant-design/icons";

export const About = () => {
    return (
        <div className="App">
            <Layout className="layout">
                <Navbar/>
                <Content style={{padding: "0 50px", paddingTop: "10px"}}>

                    <Typography>
                        <Divider>Technology Stack</Divider>
                        <Paragraph>
                            <ul style={{listStyle: "none"}}>
                                <li>
                                    Vite
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Google Cloud - Firebase Cloud Functions
                                </li>
                                <li>
                                    Ant Design
                                </li>
                            </ul>
                        </Paragraph>
                        <Divider>Why is it called lightswitch?</Divider>
                        <Paragraph>
                            The name lightswitch comes from the hope that I have provided enough evidence for an
                            investor to realize that the risks associated with sustainable investing aren't much
                            different than traditional investing, if not less risky.
                        </Paragraph>
                        <Divider>What APIs did you use to get the data?</Divider>
                        <Paragraph>
                            I used Yahoo Finance to collect all the ticker data. More technically, I hosted a GCP -
                            Firebase Cloud Function which called the Yahoo Finance API and returned it back to the
                            web page.
                        </Paragraph>
                        <Divider>Who is this really for?</Divider>
                        <Paragraph>
                            This is made for people who aren't necessarily new to investing (although they can be!).
                            They might possibly already have their own portfolio set up or own set of securities, so
                            they would know what a couple of "rules" might be around safe investing.
                        </Paragraph>
                    </Typography>


                </Content>
                <Footer style={{textAlign: "center"}}>
                    <BulbOutlined/>
                    lightswitch ©2022 Created by Samuel Yuen
                </Footer>
            </Layout>
        </div>

    )
}