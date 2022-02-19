import "./App.css";

import {Card, Col, Divider, Image, Layout, Row, Tooltip, Typography} from "antd";
import {Navbar} from "./components/Navbar";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {BulbOutlined} from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import fallbackImage from "./assets/images/fallback_image.png"

const {Content, Footer} = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <Navbar/>
                <Content style={{padding: "0 50px"}}>
                    <Typography>
                        <Title>
                            <BulbOutlined/>
                            lightswitch
                        </Title>
                        <Paragraph>
                            lightswitch is meant to show investors who are currently invested into financial products
                            that are non-sustainable into things that ARE sustainable.
                        </Paragraph>
                        <Paragraph>
                            The financial products that have higher sustainability ratings and generally have a
                            good <Tooltip
                            title={"MSCI ESG Fund Ratings aims to provide fund-level transparency to help clients " +
                                "better understand and measure the environmental, social and governance" +
                                " characteristics" +
                                " of a portfolio, and rank or screen funds based on a diverse set of ESG exposure" +
                                " categories."}> <Text strong>ESG score</Text></Tooltip>.
                        </Paragraph>
                        <Divider/>
                        <Title h2>Why Choose Sustainable Investing?</Title>
                        <Image
                            width={"50%"}
                            height={"50%"}
                            src={"https://www.blackrock.com/blk-inst-assets/cache-1578495854000/images/" +
                                "media-bin/web/institutional/solutions/sustainable-inv-swell-graph.png"}
                            fallback={fallbackImage}
                        />
                        <Paragraph>
                            However, as experienced investors will know, there is <Text strong>NO</Text> guarantee
                            that forward-looking estimates will come to pass.
                        </Paragraph>
                        <Paragraph>
                            In general, there are <Text strong>3</Text> main reasons why investors are starting to
                            shift over to sustainable investing.
                        </Paragraph>
                    </Typography>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card span={8} title={"Shifting client requirements"}>Future financial decision-makers are
                                asking
                                more of
                                companies and are seeking more sustainable investment solutions.</Card>
                        </Col>
                        <Col span={8}>
                            <Card span={8} title={"Government influence"}>Regulators and governments are expanding their
                                focus
                                on
                                incorporating sustainability into investment information and decision making.</Card>
                        </Col>
                        <Col span={8}>
                            <Card span={8} title={"Portfolio implications"}>There is growing recognition that ESG
                                research and
                                analysis can potentially identify investment risks and help generate excess returns.
                            </Card>
                        </Col>
                    </Row>


                </Content>
                <Footer style={{textAlign: "center"}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
