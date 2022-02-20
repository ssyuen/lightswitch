import {Card, Checkbox, Col, Divider, Layout, Row, Spin, Tooltip, Typography} from "antd";
import {Navbar} from "./Navbar";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {Content, Footer} from "antd/es/layout/layout";
import {useState} from "react";
import Text from "antd/es/typography/Text";
import {BulbOutlined} from "@ant-design/icons";

export const Portfolio = () => {

    const [fetchingData, setFetchingData] = useState(false);
    const [riskData, setRiskData] = useState([]);


    const FUND_OPTIONS = [
        {label: 'Active Equity ETF', value: 'active'},
        {label: 'Fixed Income', value: 'fixed'},
        {label: 'Smart Beta ETF', value: 'smart'},
        {label: 'Sector ETF', value: 'sector'},
    ]

    const ACTIVE_FUNDS = ["MADVX", "CMGIX", "BILPX", "MDDVX", "BGSIX"]
    const SECTOR_FUNDS = ["IUES", "KXI", "IUCD"]
    const FIXED_FUNDS = ["BGRN", "SUSC", "SUSB"]
    const SMART_FUNDS = ["MVOL", "WVOL", "AUMF", "WDMF"]
    const riskMappingToFund = {
        "sector": SECTOR_FUNDS,
        "fixed": FIXED_FUNDS,
        "smart": SMART_FUNDS,
        "active": ACTIVE_FUNDS
    }


    const handleRiskSelector = (options) => {
        console.log(options)
        if (options.length === 0) {
            setRiskData([])
            return
        }
        let reqPayload = {
            ticker: ""
        };

        options.forEach(fund => {
            reqPayload.ticker += riskMappingToFund[fund][Math.floor(Math.random() * riskMappingToFund[fund].length)] + ","
        })
        if (reqPayload.ticker.match(",").length === 1 || reqPayload.ticker.match(",").length === 1) reqPayload.ticker = reqPayload.ticker.substr(0, reqPayload.ticker.length - 1)
        console.log((reqPayload))
        setFetchingData(true)
        fetch("https://us-central1-lightswitch-backend.cloudfunctions.net/searchTicker", {
            body: JSON.stringify(reqPayload),
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                setRiskData([])
                response.forEach(tickerResponse => {
                    setRiskData(oldArr => {
                        return [...oldArr, tickerResponse]
                    })
                    setFetchingData(false)
                })

            })
        console.log(riskData)
    }
    return (
        <div className="App">
            <Layout className="layout">
                <Navbar/>
                <Content style={{padding: "0 50px"}}>
                    <Row>
                        <Col span={24}>
                            <Typography>
                                <Title level={1}>Generate a Portfolio!</Title>
                                <Paragraph>
                                    With your preferences in mind, generate a portfolio according to your budget and how
                                    much ESG and risk you are willing to take in.
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                    {/*PORTFOLIO ROW*/}
                    <Row>
                        <Col span={24}>
                            <Title level={3}>
                                Select a combination to display:
                            </Title>
                            <Checkbox.Group onChange={handleRiskSelector} options={FUND_OPTIONS}/>

                        </Col>
                        <Divider/>
                    </Row>
                    {/*CALCULATOR/INFORMATION ROW*/}
                    <Row>

                        <Col span={24}>
                            <Typography>
                                <Title level={3}>Things to Consider When Constructing a Portfolio</Title>
                                <Paragraph>
                                    Even experienced investors may not know the minute details/import factors that go
                                    into constructing a portfolio, and sometimes that is a <Text strong>good</Text>
                                    thing. Often times, just putting money into a target date fund or a index that
                                    tracks the whole stock market is good enough. But if you are interested in how
                                    <Text strong> those</Text> indices are constructed, then see below.
                                </Paragraph>
                                <Paragraph>
                                    <ol>
                                        <li>
                                            <Text strong>Beta: </Text> Higher and lower betas indicate more or less
                                            divergence from the respective market averages.
                                        </li>
                                        <li>
                                            <Text strong>Sharpe Ratio:</Text> measures risk-adjusted performance by
                                            subtracting a risk-free rate, like the 10-year U.S. Treasury bond, from
                                            one's investment returns and dividing the result by the standard deviation
                                            of those returns. The greater the ratio, the better the risk-adjusted
                                            performance is said to be.
                                        </li>
                                        <li>
                                            <Text strong>Fund Fees: Investing into managed funds/ETFs/mutual funds will
                                                often net you some sort of fee that is exposed to the actual fund
                                                assets. This is because the fees are really paying for whoever is doing
                                                the legwork for managing the funds (tons and tons of analysts seeing
                                                what securities should be composed to build the fund).</Text>
                                        </li>
                                        <li>
                                            <p>
                                                <Text strong>Age:</Text> While there isn't really a steady state rule
                                                about
                                                how age affects a portfolio's composition, there are some key guidelines
                                                that would be good to follow in terms of a portfolio's composition.
                                            </p>
                                            <p>
                                                <Text>For years, a commonly cited rule of thumb has helped simplify
                                                    asset
                                                    allocation. It states that individuals should hold a percentage of
                                                    stocks equal to 100 minus their age. So, for a typical 60-year-old,
                                                    40%
                                                    of the portfolio should be equities. The rest would comprise of
                                                    high-grade bonds, government debt, and other relatively safe
                                                    assets.</Text>
                                            </p>
                                            <p>
                                                <Text>
                                                    It’s important to keep in mind that guidelines like this are just a
                                                    starting point for making decisions. A variety of factors may shape
                                                    an
                                                    investment strategy, including age at retirement and assets needed
                                                    to
                                                    sustain one’s lifestyle. Since women live nearly five years longer
                                                    than
                                                    men on average, they have higher costs in retirement than men and an
                                                    incentive to be slightly more aggressive with their nest egg.
                                                    For many investment pros, such realities mean that the old “100
                                                    minus
                                                    your age” axiom puts investors in jeopardy of running low on funds
                                                    during their later years. Some have modified the rule to 110 minus
                                                    your
                                                    age – or even 120 minus your age, for those with a higher tolerance
                                                    for
                                                    risk.
                                                </Text>
                                            </p>

                                        </li>
                                    </ol>
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                    {/*TABLE CONTAINING PORTFOLIO*/}
                    <Row>
                        <Col span={24}>
                            {fetchingData ? <Spin> </Spin> : riskData.map((fund, i) => {
                                return (
                                    <Card key={i} title={(fund.price.shortName || fund.price.longName)}>
                                        <ul style={{listStyle: "none", float: "left"}}>

                                            <li><Tooltip
                                                title={"The price of the security"}>Price:</Tooltip> {(fund.price.regularMarketPrice || fund.summaryDetail.navPrice)}
                                            </li>
                                            <li><Tooltip
                                                title={"Volume is the amount of an asset or security that changes hands over some period of time, often over the course of a day"}>Volume:</Tooltip> {fund.price.regularMarketVolume}
                                            </li>
                                            <li><Tooltip
                                                title={"Where the security is being traded"}>Exchange:</Tooltip>{fund.price.exchangeName}
                                            </li>
                                            <li><Tooltip
                                                title={"A sector is an area of the economy in which businesses share the same or related business activity, product, or service."}>Sector:</Tooltip> {fund.defaultKeyStatistics?.["category"]}
                                            </li>
                                            <li>
                                                Business Summary: {fund.summaryProfile?.longBusinessSummary}
                                            </li>
                                        </ul>
                                    </Card>
                                )

                            })}

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