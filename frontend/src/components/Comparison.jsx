import {
    Button,
    Card,
    Col,
    Collapse,
    Divider,
    Input,
    Layout,
    List,
    Row,
    Spin,
    Switch as Toggle,
    Tooltip,
    Typography
} from "antd";
import {Navbar} from "./Navbar";
import {Content, Footer} from "antd/es/layout/layout";
import {useEffect, useState} from "react";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import {BulbOutlined} from "@ant-design/icons";

export const Comparison = () => {
    const [tickerValues, setTickerValues] = useState([]);
    const [searching, setSearching] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [usingBlackRockEquityFunds, setUsingBlackRockEquityFunds] = useState(true);
    const [blackRockFunds, setBlackRockFunds] = useState([]);

    const [indBeta, setIndBeta] = useState(0)
    const [numOfIndBeta, setNumOfIndBeta] = useState(0)


    const [fundBeta, setFundBeta] = useState(0)
    const [numOfFundBetas, setNumOfFundBetas] = useState(0)

    const [fetchedDefaultBlackRockData, setFetchedDefaultBlackRockData] = useState(false);
    // "BIRIX, DSI, SUSL, ESGD, ESGE, ESGU, ESML, ICLN, CRBN, SDG" : "BGRN, SUSC, SUSB"
    // "T, MSFT, AAPL" : "BGRN, SUSC, SUSB"
    useEffect(() => {

        if (!fetchedDefaultBlackRockData) {
            const reqPayload = {
                ticker: usingBlackRockEquityFunds ? "BIRIX, DSI, SUSL, ESGD, ESGE, ESGU, ESML, ICLN, CRBN, SDG" : "BGRN, SUSC, SUSB"
            }
            fetch("https://us-central1-lightswitch-backend.cloudfunctions.net/searchTicker", {
                body: JSON.stringify(reqPayload),
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => {

                    response.forEach(tickerResponse => {
                        setFundBeta(prevBeta => prevBeta + ("defaultKeyStatistics" in tickerResponse ? 1 : 0))
                        setNumOfFundBetas(prevCount => prevCount + ("defaultKeyStatistics" in tickerResponse ? tickerResponse.defaultKeyStatistics?.beta3Year : 0))

                        setBlackRockFunds(oldArr => {
                            return [...oldArr, tickerResponse];
                        })
                    })
                    setFetchedDefaultBlackRockData(true);
                })
        }
    }, [fetchedDefaultBlackRockData, usingBlackRockEquityFunds])

    const handleResetIndTickers = () => {
        setIndBeta(0)
        setNumOfIndBeta(0)
        setTickerValues([])
    }

    const handleFundSwitch = () => {
        setUsingBlackRockEquityFunds(!usingBlackRockEquityFunds);
        setFundBeta(0)
        setNumOfFundBetas(0)
        setFetchedDefaultBlackRockData(false);
    }

    const handleSearchChange = ({target}) => {
        setSearchInput(target.value);
    }
    const handleSearchTicker = ({target}) => {
        const search = target.value
        const reqPayload = {
            ticker: search
        };
        setSearching(true);
        fetch("https://us-central1-lightswitch-backend.cloudfunctions.net/searchTicker", {
            body: JSON.stringify(reqPayload),
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                response.forEach(tickerResponse => {
                    console.log(tickerResponse)
                    setIndBeta(prevBeta => prevBeta + ("beta3Year" in tickerResponse.defaultKeyStatistics || "defaultKeyStatistics" in tickerResponse ? (tickerResponse.defaultKeyStatistics?.beta || tickerResponse.defaultKeyStatistics?.beta3Year) : 0))
                    setNumOfIndBeta(prevCount => prevCount + ("defaultKeyStatistics" in tickerResponse ? 1 : 0))
                    setTickerValues(oldArr => {
                        return [...oldArr, tickerResponse];
                    })
                })

                setSearchInput("");
            })
        setSearching(false);

    }
    return (
        <div className="App">
            <Layout className="layout">
                <Navbar/>
                <Content style={{padding: "0 50px", paddingTop: "10px"}}>
                    <Row>
                        <Col span={24}>
                            <Typography>
                                <Title>Comparing the Sustainable Solutions</Title>
                                <Paragraph>
                                    There are currently <Text strong>2</Text> types of sustainable investments as
                                    offered by BlackRock's sustainable investments.
                                    <Collapse>
                                        <CollapsePanel header={"Equity Investments"}>
                                            <p>
                                                An equity investment is money that is invested in a company by
                                                purchasing shares of that company in the stock market. These shares are
                                                typically traded on a stock exchange.
                                            </p>
                                            <Title level={4}>What are the potential benefits of equity
                                                investments?</Title>
                                            <Paragraph>
                                                <ol>
                                                    <li>
                                                        <Text>The main benefit from an equity investment is the
                                                            possibility to increase the value of the principal amount
                                                            invested. This comes in the form of capital gains and
                                                            dividends.</Text>
                                                    </li>
                                                    <li>
                                                        <Text>An equity fund offers investors a diversified investment
                                                            option typically for a minimum initial investment
                                                            amount.</Text>
                                                    </li>
                                                    <li>
                                                        <Text>If an investor wanted to achieve the same level of
                                                            diversification as an equity fund, it would require much
                                                            more – and much more manual – capital investment.
                                                        </Text>
                                                    </li>
                                                    <li>
                                                        <Text>Investors may also be able to increase investment through
                                                            rights shares, should a company wish to raise additional
                                                            capital in equity markets.</Text>
                                                    </li>
                                                </ol>
                                            </Paragraph>
                                        </CollapsePanel>
                                        <CollapsePanel header={"Fixed Income Investments"}>
                                            <p>Fixed income is an investment approach focused on preservation of capital
                                                and income. It typically includes investments like government and
                                                corporate bonds, CDs and money market funds. Fixed income can offer a
                                                steady stream of income with less risk than stocks.</p>
                                            <Title h4>What are the potential benefits of fixed income?</Title>
                                            <Paragraph>
                                                <ol>
                                                    <li>
                                                        <Text strong>Diversification from stock market risk</Text>
                                                    </li>
                                                    <li>
                                                        <Text strong>Capital preservation</Text>
                                                    </li>
                                                    <li>
                                                        <Text strong>Income generation</Text>
                                                    </li>
                                                    <li>
                                                        <Text strong>Total return</Text>
                                                    </li>
                                                </ol>
                                            </Paragraph>
                                        </CollapsePanel>
                                    </Collapse>
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Typography>
                                <Paragraph>
                                    The purpose of this page is to compare the risk associated with picking your own
                                    individual securities versus what you would get with a managed fund (with all
                                    managed funds being taken from BlackRock's sustainable funds)
                                </Paragraph>
                            </Typography>
                            <Divider/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Typography>
                                <Title>Types of Search Input:</Title>
                                <Paragraph>
                                    <ol>
                                        <li>
                                            A single ticker: <Text code>CORP.L</Text>
                                        </li>
                                        <li>
                                            Tickers separated by commas: <Text code>T, MSFT, AAPL</Text>
                                        </li>
                                    </ol>
                                </Paragraph>
                            </Typography>


                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}><Button onClick={handleResetIndTickers} type={"primary"} danger>Reset Individual
                            Tickers</Button></Col>
                        <Col span={18}><Input disabled={searching} onPressEnter={handleSearchTicker}
                                              placeholder={"Search for ticker..."} value={searchInput}
                                              onChange={handleSearchChange}/></Col>

                        <Divider/>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Typography>
                                <Title level={3}>
                                    Individual Overall
                                    Risk: {indBeta.toFixed(2)}
                                </Title>
                                <Title level={3}>
                                    Individual Averaged
                                    Risk: {!isNaN(indBeta / numOfIndBeta) ? (indBeta / numOfIndBeta).toFixed(2) : 0}
                                </Title>
                            </Typography>
                        </Col>
                        <Col span={12}>
                            <Typography>
                                <Title level={3}>
                                    Funds Overall Risk: {fundBeta.toFixed(2)}
                                </Title>
                                <Title level={3}>
                                    Funds Averaged
                                    Risk: {!isNaN(fundBeta / numOfFundBetas) ? (fundBeta / numOfFundBetas).toFixed(2) : 0}
                                </Title>
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Typography>
                                <Title>
                                    Searched Tickers
                                </Title>
                            </Typography>
                            {searching ? <Spin/> :
                                <List
                                    dataSource={tickerValues}
                                    grid={{
                                        gutter: 16,
                                        xs: 1,
                                        sm: 2,
                                        md: 4,
                                        lg: 4,
                                        xl: 6,
                                        xxl: 3,
                                    }}
                                    renderItem={item => (
                                        <List.Item span={12}>
                                            <Card title={item.price.shortName}>
                                                <ul style={{listStyle: "none", float: "left"}}>
                                                    <li>Price: {item.price.regularMarketPrice}</li>
                                                    <li>Volume: {item.price.regularMarketVolume}</li>
                                                    <li>Exchange: {item.price.exchangeName}</li>
                                                    <li>Sector: {item.defaultKeyStatistics?.["category"]}</li>
                                                </ul>
                                            </Card>
                                        </List.Item>
                                    )}
                                />
                            }
                        </Col>

                        <Col span={12}>
                            <Typography>
                                <Title>BlackRock Offered Funds</Title>
                                <Toggle checkedChildren={"Equity Funds"}
                                        unCheckedChildren={"Fixed Income Funds"}
                                        onClick={handleFundSwitch}/>
                            </Typography>
                            {fetchedDefaultBlackRockData ? <List
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 6,
                                    xxl: 3,
                                }}
                                dataSource={blackRockFunds}
                                renderItem={item => (
                                    <List.Item span={12}>
                                        <Card title={item.price.shortName}>
                                            <ul style={{listStyle: "none", float: "left"}}>
                                                <li><Tooltip
                                                    title={"The price of the security"}>Price:</Tooltip> {item.price.regularMarketPrice}
                                                </li>
                                                <li><Tooltip
                                                    title={"Volume is the amount of an asset or security that changes hands over some period of time, often over the course of a day"}>Volume:</Tooltip> {item.price.regularMarketVolume}
                                                </li>
                                                <li><Tooltip
                                                    title={"Where the security is being traded"}>Exchange:</Tooltip>{item.price.exchangeName}
                                                </li>
                                                <li><Tooltip
                                                    title={"A sector is an area of the economy in which businesses share the same or related business activity, product, or service."}>Sector:</Tooltip> {item.defaultKeyStatistics?.["category"]}
                                                </li>
                                            </ul>
                                        </Card>
                                    </List.Item>
                                )}
                            /> : <Spin/>}

                            {/*    ADD SWITCH HERE FOR EQUITY/FIXED INCOME*/}
                        </Col>
                    </Row>


                </Content>
                <Footer style={{textAlign: "center"}}>
                    <BulbOutlined/>
                    lightswitch ©2022 Created by Samuel Yuen
                </Footer>
            </Layout>
        </div>

    )
}